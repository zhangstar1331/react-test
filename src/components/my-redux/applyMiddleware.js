export default function applyMiddleware(...middlewares) {
    return createStore => reducer => {
        const store = createStore(reducer)
        let dispatch = store.dispatch
        //增强dispatch
        const midApi = {
            getState: store.getState,
            dispatch: action => dispatch(action)
        }
        const middlewareChain = middlewares.map(middleware => middleware(midApi))
        dispatch = compose(...middlewareChain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}
function compose(...funs){
    if(funs.length === 0){
        return (arg) => arg
    }
    if(funs.length === 1){
        return funs[0]
    }
    return funs.reduce((a,b)=>(...args)=>a(b(...args)))
}
