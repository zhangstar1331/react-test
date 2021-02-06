import React, { Component } from 'react'

export default class SetStatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        //生命周期异步
        this.changeVal(1)
        //原生事件同步
        document.getElementById('btn').addEventListener('click', this.setCounter)
    }
    changeVal = (v) => {
        //合成事件异步
        // this.setState({
        //     counter: this.state.counter + v
        // },()=>{
        //     //更新完成之后的处理逻辑
        //     console.log('counter', this.state.counter)
        // })
        //setState中可以放对象也可以放函数
        this.setState((state)=>({
            //将counter返回回去供下次执行，依次执行
            counter: state.counter + v
        }))
        console.log('counter', this.state.counter)
    }
    setCounter = () => {
        //setTimeout中同步
        // setTimeout(() => {
        //     this.changeVal(1)
        // }, 0)
        this.changeVal(1)
        this.changeVal(2)//批量合并更新，只执行加2的操作
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>setState用法</h2>
                <p>1、不能直接修改state</p>
                <p>2、setState是异步的（合成事件和生命周期函数中），也可以改为同步（原生事件和setTimeout中）</p>
                <p>3、setState是批量更新的，多次更新同一个值会被合并，可以将其参数改为函数去修改变成依次触发</p>
                <button onClick={this.setCounter}>{counter}</button>
                <button id="btn">原生事件{counter}</button>
            </div>
        )
    }
}
