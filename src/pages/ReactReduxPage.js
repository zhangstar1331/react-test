import React, { Component } from 'react'
// import {connect} from 'react-redux'
import {connect} from '../components/myReactRedux'
// import { bindActionCreators } from 'redux'
import {bindActionCreators} from '../components/myReactRedux'

//mapStateToProps(state, [ownProps]): stateProps] (Function)
//该回调函数必须返回一个纯对象，这个对象会与组件的props合并
//ownProps是当前组件自身的props，如果指定了，那么只要组件接收到新的props，mapStateToProps就会被调用，mapStateToProps会重新计算，容易影响性能
const mapStateToProps = state => {
    return {
        num: state.count
    }
}

//mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)
//如果不写这个参数，默认情况下dispatch会注入到你的组件props中
//如果传递的是一个对象，dispatch会被内部实现
/*
const mapDispatchToProps = {
    add: () => ({type: "ADD"}),
    minus: () => ({type: "MINUS"})
}
*/
//如果传递的是一个函数，dispatch需要当做参数传入，内部自己返回一个对象
const mapDispatchToProps = dispatch => {
    let creators = {
        add: () => ({type: "ADD"}),
        minus: () => ({type: "MINUS"})
    }
    //对对象中的内容用dispatch包装返回新的对象
    creators = bindActionCreators(creators, dispatch)
    return {dispatch, ...creators}
}


//一个高阶函数，React组件与redux沟通的桥梁
@connect(
    mapStateToProps,//状态映射
    mapDispatchToProps//派发事件映射
)
class ReactReduxPage extends Component {
    render() {
        const {num,add,minus} = this.props
        return (
            <div>
                <h2>react-redux测试</h2>
                <p>react-redux提供了两个api</p>
                <p>1、Provider为后代组件提供store,置于index.js中，包着App</p>
                <p>2、Connect为组件提供数据和变更方法，连接React组件与Redux store</p>
                <p>{num}</p>
                {/* <button onClick={()=>dispatch({type:"ADD"})}>+</button> */}
                <button onClick={add}>+</button>
                <button onClick={minus}>-</button>
            </div>
        )
    }
}
export default ReactReduxPage