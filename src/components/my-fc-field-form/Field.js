import React, { Component } from 'react'
import FieldContext from './FieldContext'
export default class Field extends Component {
    static contextType = FieldContext

    //将当前组件添加到组件标签数组中，方便后续操作
    componentDidMount(){
        this.unRegisterField = this.context.registerField(this)
    }

    //即将卸载清空数据，避免操作卸载的组件出现错误
    componentWillMount(){
        if(this.unRegisterField){
            this.unRegisterField()
        }
    }

    //更新组件，渲染数据
    onStoreChange = () => {
        //前提是组件还没有卸载
        this.forceUpdate()
    }
    getControlled = () => {
        const {setFieldsValue, getFieldValue} = this.context
        const {name} = this.props
        return {
            value: getFieldValue(name),
            onChange: e => {
                const newValue = e.target.value
                setFieldsValue({[name]:newValue})
            }
        }
    }
    render() {
        const {children} = this.props
        const returnChildNode = React.cloneElement(children, this.getControlled())
        return returnChildNode
    }
}
