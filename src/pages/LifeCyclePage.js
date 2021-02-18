import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class LifeCyclePage extends Component {
    static defaultProps = {
        msg: "aaa"
    }
    //类型
    static propTypes = {
        msg: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    //将要挂载
    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount')
    // }
    //会在调用render之前调用，并且在初始挂载及后续更新时都会被调用
    //应返回一个对象来更新state，返回null则不更新任何内容，可以修改值
    static getDerivedStateFromProps(props,state){ 
        const {count} = state
        console.log('getDerivedStateFromProps',count)
        return count < 5 ? null : {count: 0}
    }
    //已完成挂载
    componentDidMount() {
        console.log('componentDidMount')
    }
    //数据改变，控制render是否执行渲染
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }
    //更新之前
    // UNSAFE_componentWillUpdate() {
    //     console.log('componentWillUpdate')
    // }
    //在render之后，componentDidUpdate之前调用，即最近依次渲染输出之前调用
    //它使得组件能在发生更改之前从DOM中捕获一些信息
    //返回值将作为参数传递给componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        const {count} = prevState
        console.log('getSnapshotBeforeUpdate',count)
        return {msg:'bbb'}
    }
    //更新之后
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
        console.log('componentDidUpdate')
    }
    setCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const { count } = this.state
        return (
            <div>
                <h2>生命周期</h2>
                <p>componentWillMount、componentWillReceiveProps、componentWillUpdate已被废弃，将被getDerivedStateFromProps替代,不能共用</p>
                {count < 3 && <TestComponent count={count}/>}
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
class TestComponent extends Component {
    //会在已挂载的组件接收新的props之前被调用
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
    //即将销毁
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                销毁测试
                <p>{this.props.count}</p>
            </div>
        )
    }
}

