// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
// import Promise from 'redux-promise'
import isPromise from 'is-promise'
import {isFSA} from 'flux-standard-action'
import {createStore, applyMiddleware, combineReducers} from '../components/my-redux'
//reducer初始化、修改状态函数
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - (action.payload || 1)
        default:
            return state
    }
}
const counterReducer2 = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 10
        case 'MINUS':
            return state - (action.payload || 10)
        default:
            return state
    }
}
//创建store
const store = createStore(
    combineReducers({
        count:counterReducer,
        count2: counterReducer2
    }),
    applyMiddleware(thunk, Promise, logger)
)
export default store

//thunk处理异步
function thunk({dispatch, getState}){
    //next是聚合函数，相当于compose中的a
    return next => action => {
        if(typeof action === "function"){
            return action(dispatch, getState)
        }
        return next(action)
    }
}

//logger一定要放在applyMiddleware最后一个参数，因为放在前面的话，可能没有type值
//thunk处理的函数也是'action'，但是就没有type值
function logger({dispatch, getState}){
    return next => action => {
        console.log("start **************************")
        console.log(action.type + "执行了")
        const prevState = getState()
        console.log("prev state", prevState)

        const returnValue = next(action)
        const nextState = getState()
        console.log("next state", nextState)
        console.log("end *************************")
        return returnValue
    }
}

//Promise简版
function Promise1({dispatch}){
    return next => action => {
        return isPromise(action) ? action.then(dispatch) : next(action)
    }
}
//完整版
function Promise({dispatch}){
    return next => action => {
        if(!isFSA(action)){
            return isPromise(action) ? action.then(dispatch) : next(action)
        }
        return isPromise(action.payload) 
            ? action.payload
                .then(result => dispatch({...action, payload: result}))
                .catch(error => {
                    dispatch({...action, payload: error, error: true})
                    return Promise.reject(error)
                }) 
            : next(action)
    }
}