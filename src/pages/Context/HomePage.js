import React, { Component } from 'react'
import {ThemeContext} from '../Context'
import UserPage from './UserPage'
export default class HomePage extends Component {
    static contextType = ThemeContext
    render() {
        console.log(this)
        // const {themeColor} = this.props.theme
        const {themeColor} = this.context
        return (
            <div>
                <h3 className={themeColor}>我是子</h3>
                <UserPage/>
            </div>
        )
    }
}
