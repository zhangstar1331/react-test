import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'

export default class Layout extends Component {
    componentDidMount(){
        const {title} = this.props
        document.title = title
    }
    render() {
        const {children,showTopBar,showBottomBar} = this.props
        return (
            <div>
                {showTopBar&&<TopBar/>}
                {children.content}
                {children.txt}
                <button onClick={children.btnClick}>点击</button>
                {showBottomBar&&<BottomBar/>}
            </div>
        )
    }
}
