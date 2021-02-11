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
    componentWillMount() {
        console.log('componentWillMount')
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
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    //更新之后
    componentDidUpdate() {
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
                {count < 3 && <TestComponent count={count}/>}
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
class TestComponent extends Component {
    //会在已挂载的组件接收新的props之前被调用
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
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

