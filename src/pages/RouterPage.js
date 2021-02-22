import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ClassComponent from './ComponentTest/ClassComponent'
import SetStatePage from './SetStatePage'
import ReduxPage from './ReduxPage'
import ReactReduxPage from './ReactReduxPage'
import PureComponentPage from './PureComponentPage'
import LifeCyclePage from './LifeCyclePage'
import AntdTestPage from './AntdTestPage'
import HookPage from './HookPage'
import DialogPage from './DialogPage'
import HocPage from './HocPage'
import ContextPage from './Context/ContextPage'
import UserForm from './Form/UserForm'
import MyRcForm from './Form/MyRcForm'
export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>路由测试</h3>
                <Router>
                    <Link to="/"> 首页 </Link>
                    <Link to="/user"> 用户中心 </Link>
                    <Link to="/component"> 组件测试 </Link>
                    <Link to="/setState"> 修改state </Link>
                    <Link to="/redux"> Redux测试 </Link>
                    <Link to="/reactRedux"> react-redux测试 </Link>
                    <Link to="/pureComponent"> PureComponent </Link>
                    <Link to="/lifeCycle"> 生命周期 </Link>
                    <Link to="/antdTest"> Antd测试 </Link>
                    <Link to="/hook"> 认识hook及自定义hook </Link>
                    <Link to="/dialog"> 弹窗组件实现 </Link>
                    <Link to="/hoc"> 高阶组件 </Link>
                    <Link to="/context"> 组件间通信 </Link>
                    <Link to="/userForm"> antd4表单组件 </Link>
                    <Link to="/rcForm"> antd3表单组件 </Link>
                    {/* 
                        Switch表示仅匹配一个
                        设定一个没有path的路由在路由表最后面，表示一定匹配
                    */}
                    <Switch>
                        {/* 根路由添加exact，实现精确匹配 */}
                        {/* 
                            component、children、render都可用来路由匹配
                            优先级：children>component>render
                            其中children不受location的影响，始终存在，另外两个受影响
                        */}
                        <Route 
                            path="/" 
                            exact 
                            component={HomePage}
                            // children={()=><div>children</div>}
                            // render={()=><div>render</div>}
                        />
                        <Route path="/user" component={UserPage} />
                        <Route path="/component" component={ClassComponent} />
                        <Route path="/setState" component={SetStatePage} />
                        <Route path="/redux" component={ReduxPage} />
                        <Route path="/reactRedux" component={ReactReduxPage} />
                        <Route path="/pureComponent" component={PureComponentPage} />
                        <Route path="/lifeCycle" component={LifeCyclePage} />
                        <Route path="/antdTest" component={AntdTestPage} />
                        <Route path="/hook" component={HookPage} />
                        <Route path="/dialog" component={DialogPage} />
                        <Route path="/hoc" component={HocPage} />
                        <Route path="/context" component={ContextPage} />
                        <Route path="/userForm" component={UserForm} />
                        <Route path="/rcForm" component={MyRcForm} />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage
            </div>
        )
    }
}
class UserPage extends Component {
    render() {
        return (
            <div>
                UserPage
            </div>
        )
    }
}
class EmptyPage extends Component {
    render() {
        return (
            <div>
                404
            </div>
        )
    }
}
