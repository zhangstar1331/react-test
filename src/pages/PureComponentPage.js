import React, { Component, PureComponent } from 'react'

export default class PureComponentPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            // obj:{
            //     num:2
            // }
        }
    }
    setCount = ()=>{
        this.setState({
            count:1000,
            // obj:{
            //     num:200
            // }
        })
    }
    // 和PureComponent不能共用
    // shouldComponentUpdate(preState,nextState){
    //     const {count} = this.state
    //     //返回false会阻断下面render的执行
    //     return count!=nextState.count
    // }
    render() {
        //非纯组件中，点击事件这儿会一直执行
        console.log(11111111111)
        const { count } = this.state
        return (
            <div>
                <h2>纯组件</h2>
                <p>纯组件必须是class的形式，在一定情况下可以提高性能</p>
                <p>PureComponent和Component的区别是前者内部没有实现shouldComponentUpdate()，而PureComponent中以浅层对比prop和state的方式来实现了该函数。如果state中包含复杂的数据结构，则纯组件将失效</p>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
