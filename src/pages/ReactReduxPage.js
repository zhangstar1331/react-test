import React, { Component } from 'react'
import {connect} from 'react-redux'
class ReactReduxPage extends Component {
    render() {
        const {num,add,minus} = this.props
        return (
            <div>
                <h2>react-redux测试</h2>
                <p>react-redux提供了两个api</p>
                <p>1、Provider为后代组件提供store,置于index.js中，包着App</p>
                <p>2、Connect为组件提供数据和变更方法</p>
                <p>{num}</p>
                {/* <button onClick={()=>dispatch({type:"ADD"})}>+</button> */}
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        num: state
    }
}
const mapDispatchToProps = {
    add: () => ({type: "ADD"}),
    minus: () => ({type: "MINUS"})
}
export default connect(
    mapStateToProps,//状态映射
    mapDispatchToProps//派发事件映射
)(ReactReduxPage)