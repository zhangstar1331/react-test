export default function createStore(reducer, enhancer) {
    //处理中间件
    if (enhancer) {
        return enhancer(createStore)(reducer)
    }
    let currentState
    let currentListener = []
    function getState() {
        return currentState
    }
    function dispatch(action) {
        currentState = reducer(currentState, action)
        //通知组件
        currentListener.forEach(listener => listener())
    }
    function subscribe(listener) {
        //订阅
        currentListener.push(listener)
        return () => {
            const index = currentListener.indexOf(listener)
            currentListener.slice(index, 1)
        }
    }
    //初始化默认值
    dispatch('AFASFHKDFHDJKHDSFK')
    return {
        getState,
        dispatch,
        subscribe
    }
}
