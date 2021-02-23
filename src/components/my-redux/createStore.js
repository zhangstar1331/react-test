import React from 'react'

export default function createStore(reducer) {
    let currentState = null
    let currentListener = []
    function getState (){
        return currentState
    }
    function dispatch (action){
        currentState = reducer(currentState, action)
        //通知组件
        currentListener.forEach(listener=>listener())
    }
    function subscribe (listener){
        //订阅
        currentListener.push(listener)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
