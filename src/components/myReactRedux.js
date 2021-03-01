import React, {useContext, useState, useLayoutEffect, useCallback} from 'react'

//使用Context传递数据
const Context = React.createContext()

//通过Provider组件传递value
export function Provider({children, store}){
    return <Context.Provider value={store}>{children}</Context.Provider>
}

//connect是个hoc，接收组件作为参数，返回一个新组件
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
    //组件更新
    const forceUpdate = useForceUpdate()
    useLayoutEffect(() => {
        const unsubscribe = store.subscribe(() => {
            forceUpdate()
        })
        //将要卸载时执行
        return () => {
            if(unsubscribe){
                unsubscribe()
            }
        };
    }, [store])

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

//复用forceUpdate
function useForceUpdate() {
    const [state, setState] = useState(0)
    const update = useCallback(
        () => {
            setState(prev => prev + 1)
        },
        [],
    )
    return update
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