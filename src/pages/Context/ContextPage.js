import React, { Component } from 'react'
import { ThemeProvider, UserProvider } from '../Context'
import ConsumerPage from './ConsumerPage'
import HomePage from './HomePage'
export default class ContextPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: {
                themeColor: "red"
            },
            user: {
                name: "star"
            }
        }
    }
    render() {
        const { theme, user } = this.state
        return (
            <div>
                <h2>React组件间通信的几种方式</h2>
                <p>1、props</p>
                <p>
                    2、Context<br/>
                    context使用方式：<br/>
                    （1）创建一个Context对象，React.createContext()<br/>
                    （2）使用这个Context的Provider传递<br/>
                    （3）这个Provider的子组件接收value<br/>
                    三种接收方式：contextType、useContext、Consumer<br/>
                    利弊：<br/>
                    contextType只能用于类组件，且不可以接收多个Context来源<br/>
                    useContext只能用于函数组件或自定义hook<br/>
                    Consumer在两类组件中均可用，写起来麻烦<br/>
                </p>
                    <p>3、redux</p>
                    <h2>我是父</h2>
                    {/* <HomePage theme={theme}/> */}
                    <ThemeProvider value={theme}>
                        <UserProvider value={user}>
                            <HomePage />
                            <ConsumerPage />
                        </UserProvider>
                    </ThemeProvider>
            </div>
        )
    }
}
