import React, { Component } from 'react'
import Input from '../components/Input'
//import {createForm} from 'rc-form'
import {createForm} from '../components/my-rc-from'

//校验
const nameRules = {required: true, message: "请输入用户名"} 
const passwordRules = {required: true, message: "请输入密码"} 
//高阶组件
//@createForm()
@createForm
class FormPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }
    componentDidMount(){
        const {setFieldsValue} = this.props.form
        setFieldsValue({
            username:"star"
        })
    }
    submit = () => {
        const {getFieldsValue,getFieldValue,validateFields} = this.props.form
        console.log(getFieldsValue())//获取全部
        console.log(getFieldValue('username'))//获取单个
        validateFields((err,vals)=>{
            if(err){
                console.log('失败',vals)
            }else{
                console.log('成功',vals)
            }
        })
    }
    render() {
        console.log(this.props)
        const {getFieldDecorator} = this.props.form
        return (
            <div>
                <h2>表单组件</h2>
                {getFieldDecorator('username',{rules:[nameRules]})(
                    <Input placeholder="username"/>
                )}
                {getFieldDecorator('password',{rules:[passwordRules]})(
                    <Input placeholder="password"/>
                )}
                <button onClick={this.submit}>submit</button>
            </div>
        )
    }
}
export default FormPage