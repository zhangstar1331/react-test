import React, { Component } from 'react'
import Dialog from '../components/Dialog'
export default class DialogPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDialog: false
        }
    }
    render() {
        const {showDialog} = this.state
        return (
            <div>
                <button onClick={()=>this.setState({showDialog:!showDialog})}>点击</button>
                {showDialog&&<Dialog/>}
            </div>
        )
    }
}
