import React, { Component } from 'react'

//高阶组件（函数）
const foo = (Cmp) => (props) => {
    return (
        <div className="border" style={{width:"80%",height:"70%",border:"1px solid #ccc"}}>
            <Cmp {...props} msg="aaa"/>
        </div>
    )
} 

function Child(props){
    return <div>Child</div>
}

//链式使用
const Foo = foo(foo(Child))

//装饰器使用，只可以用于类组件上
@foo
class ClassChild extends Component {
    render() {
        return (
            <div>
                aaa
            </div>
        )
    }
}


export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h2>高阶组件</h2>
                <p>一个函数，参数是组件，返回值也是个组件，可链式调用</p>
                <p>不要在render内使用，因为render会多次渲染，使得高阶函数也多次渲染，浪费性能</p>
                <Foo/>
                <ClassChild/>
            </div>
        )
    }
}
