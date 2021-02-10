import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ClassComponent from './ComponentTest/ClassComponent'
import SetStatePage from './SetStatePage'
import ReduxPage from './ReduxPage'
import ReactReduxPage from './ReactReduxPage'
import PureComponentPage from './PureComponentPage'
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
