import React, { Component } from 'react'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'

export default class Layout extends Component {
    render() {
        const {children} = this.props
        console.log(children)
        return (
            <div>
                <TopBar/>
                {children}
                <BottomBar/>
            </div>
        )
    }
}
