import React, { Component } from 'react'
import store from '../store/'
export default class ReduxPage extends Component {
    componentDidMount(){
        //变更订阅
        store.unsubscribe = store.subscribe(()=>{
            //通知更新
            this.forceUpdate()
            //this.setState({})
        })
    }
    componentWillUnmount(){
        //取消订阅
        store.unsubscribe()
    }
    add = () => {
        //提交更新
        store.dispatch({type:'ADD'})
    }
    delayAdd= () => {
        // setTimeout(()=>{
        //     store.dispatch({type:'ADD'})
        // },1000)
        //这种情况需要使用thunk中间件来处理
        store.dispatch((dispatch,getState)=>{
            setTimeout(()=>{
                dispatch({type:'ADD'})
            })
        })
    }
    minus = () => {
        store.dispatch({type:'MINUS'})
    }
    promiseMinus = () => {
        store.dispatch(
            Promise.resolve({
                type: 'MINUS',
                payload: 100
            })
        )
    }
    render() {
        return (
            <div>
                <h2>ReduxPage</h2>
                {/* 获取状态值 */}
                <p>{store.getState().count}</p>
                <p>{store.getState().count2}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.delayAdd}>delay add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.promiseMinus}>promise minus</button>
            </div>
        )
    }
}
