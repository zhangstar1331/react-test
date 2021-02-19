import React, { Component } from 'react'
import FieldContext from './FieldContext'
export default class Field extends Component {
    static contextType = FieldContext

    //将当前组件添加到组件标签数组中，方便后续操作
    componentDidMount(){
        this.context.registerField(this)
    }

    //更新组件，渲染数据
    onStoreChange = () => {
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
