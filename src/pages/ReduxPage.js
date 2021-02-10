import React, { Component } from 'react'
import store from '../store/'
export default class ReduxPage extends Component {
    componentDidMount(){
        //变更订阅
        store.subscribe(()=>{
            //通知更新
            this.forceUpdate()
            //this.setState({})
        })
    }
    add = () => {
        //提交更新
        store.dispatch({type:'ADD'})
    }
    minus = () => {
        store.dispatch({type:'MINUS'})
    }
    render() {
        return (
            <div>
                <h2>ReduxPage</h2>
                {/* 获取状态值 */}
                <p>{store.getState()}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        )
    }
}
