import React, {useContext} from 'react'

//使用Context传递数据
const Context = React.createContext()

export function Provider({children, store}){
    return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect = (
    mapStateToProps = state => state, 
    mapDispatchToProps
) => WrappedComponent => props => {
    const store = useContext(Context)
    const {getState, dispatch, subscribe} = store
    const stateProps = mapStateToProps(getState())
    let dispatchProps = {}
    if(typeof mapDispatchToProps === 'function'){
        dispatchProps = mapDispatchToProps(dispatch)
    }else if(typeof mapDispatchToProps === 'object'){
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
    }else{
        dispatchProps = {dispatch}
    }
    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

function bindActionCreator(creator, dispatch){
    return (...args) => dispatch(creator(...args))
}
export function bindActionCreators(creators, dispatch){
    let obj = {}
    for(let key in creators){
        obj[key] = bindActionCreator(creators[key], dispatch)
    }
    return obj
} 