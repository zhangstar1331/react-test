import React, {Component, useEffect} from 'react'
// import Form, {Field} from 'rc-field-form'
import Form, {Field} from '../../components/my-fc-field-form'
import Input from '../../components/Input'

const nameRules = {required: true, message: "请输入姓名"}
const passwordRules = {required: true, message: "请输入密码"}

//函数式写法
function UserForm1() {
    const [form] = Form.useForm()
    //验证成功执行
    const onFinish = val => {
        console.log("onFinish", val)
    }
    //验证失败执行
    const onFinishFailed = val => {
        console.log("onFinishFailed", val)
    }
    useEffect(()=>{
        form.setFieldsValue({username:"default"})
    },[])
    return (
        <div>
            <h3>表单</h3>
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Field name="username" rules={[nameRules]}>
                    <Input placeholder="请输入姓名"/>
                </Field>
                <Field name="password" rules={[passwordRules]}>
                    <Input placeholder="请输入密码"/>
                </Field>
                <button>Submit</button>
            </Form>
        </div>
    )
}

//类式写法
export default class UserForm extends Component {
    formRef = React.createRef()
    componentDidMount(){
        //this.formRef.current.setFieldsValue({username: "default"})
    }
    onFinish = val => {
        console.log("onFinish", val)
    }
    onFinishFailed = val => {
        console.log("onFinishFailed", val)
    }
    render() {
        return (
            <div>
                <h3>表单</h3>
                <Form
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}>
                        <Field name="username" rules={[nameRules]}>
                            <Input placeholder="请输入用户名"/>
                        </Field>
                        <Field name="password" rules={[passwordRules]}>
                            <Input placeholder="请输入密码"/>
                        </Field>
                        <button>Submit</button>
                </Form>
            </div>
        )
    }
}
