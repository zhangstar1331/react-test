import React, { Component } from 'react'
import {createPortal} from 'react-dom'
export default class Dialog extends Component {
    constructor(props){
        super(props)
        const doc = window.document
        this.node = doc.createElement("div")
        doc.body.appendChild(this.node)
    }
    componentWillUnmount(){
        if(this.node){
            window.document.body.removeChild(this.node)
        }
    }
    render() {
        return createPortal(//传送门，将第一个参数内容放到指定位置
            <div className="dialog" style={{width:"100px",height:"100px",position:"fixed",top:"calc(50vh - 50px)",left:"calc(50% - 50px)",border:"1px solid #ccc",textAlign:"center"}}>
                弹窗
            </div>,
            this.node
        )
    }
}
