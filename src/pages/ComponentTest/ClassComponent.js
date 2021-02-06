import React, { Component } from 'react'
//类组件测试
export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        //存储数据状态
        this.state = {date: new Date()}
    }
    componentDidMount(){
        //组件挂载之后执行
        this.timerID = setInterval(()=>{
            //更新数据状态
            this.setState({
                date: new Date()
            })
        },1000)
    }
    componentDidUpdate(){
        //组件更新时执行
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        //组件卸载之前执行
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>
                <h2>类组件</h2>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
