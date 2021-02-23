// import {createStore} from 'redux'
import {createStore} from '../components/my-redux'
//reducer初始化、修改状态函数
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}
//创建store
const store = createStore(counterReducer)
export default store