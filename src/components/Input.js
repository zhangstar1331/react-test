import React, { Component } from 'react'
const Input = props => {
    return <input {...props}/>
}
export default class CustomizeInput extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {value = "", ...otherProps} = this.props
        return (
            <div style={{padding:10}}>
                <Input style={{outline:"none"}} value = {value} {...otherProps}/>
            </div>
        )
    }
}
