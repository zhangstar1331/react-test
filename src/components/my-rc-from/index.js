import React, { Component } from 'react'
export function createForm(Cmp) {
    return class Form extends Component {
        constructor(props){
            super(props)
            this.state = {}
            this.options = {}
        }
        changeValue = (e) => {
            const {name,value} = e.target
            this.setState({
                [name] : value 
            })
        }
        getFieldDecorator = (field,option) => (InputCmp) => {
            this.options[field] = option
            return React.cloneElement(InputCmp,{
                value:this.state[field] || "",
                onChange: this.changeValue,
                name: field
            })
        }
        getFieldsValue = () => {
            return this.state
        }
        setFieldsValue = (newStore) => {
            this.setState(newStore)
        }
        validateFields = callback => {
            let err = []
            for(let field in this.options){
                if(this.state[field]==='undefined'||this.state[field]===''){
                    err.push({
                        [field]:this.options[field].rules[0].message
                    })
                }
            }
            if(err.length>0){
                callback('err',{err:err})
            }else{
                callback(null,{...this.state})
            }
        }
        getForm = () => {
            return {
                getFieldDecorator: this.getFieldDecorator,
                getFieldsValue: this.getFieldsValue,
                validateFields: this.validateFields,
                setFieldsValue: this.setFieldsValue
            }
        }
        render() {
            const form = this.getForm()
            return <Cmp {...this.props} form={form}/>
        }
    }  
}
