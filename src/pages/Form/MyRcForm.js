import React, { Component } from 'react'
// import {createForm} from 'rc-form'
import {createForm} from '../../components/my-rc-from'
import Input from '../../components/Input'

const nameRules = {required: true, message: "请输入姓名"}
const passwordRules = {required: true, message: "请输入密码"}

@createForm
class MyRcForm extends Component {
    componentDidMount(){
        const {setFieldsValue} = this.props.form
        setFieldsValue({
            username:"default"
        })
    }
    submit = () => {
        const {getFieldsValue,validateFields} = this.props.form
        console.log(getFieldsValue())
        validateFields((status,msg)=>{
            if(status){
                console.log("校验失败",msg)
            }else{
                console.log("校验通过",msg)
            }
        })
    }
    render() {
        console.log(this.props)
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                {getFieldDecorator('username',{rules:[{...nameRules}]})(<Input placeholder = "UserName" />)}
                {getFieldDecorator('password',{rules:[{...passwordRules}]})(<Input placeholder = "PassWord" />)}
                <button type="submit" onClick={this.submit}>提交</button>
            </div>
        )
    }
}
export default MyRcForm