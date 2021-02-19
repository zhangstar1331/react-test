import React, {useRef} from 'react'

//存储表单数据
class FormStore {
    constructor(){
        this.store = {} //数据仓库
        this.fieldEntities = []
    }
    //注册Field实例
    registerField = entity => {
        this.fieldEntities.push(entity)
    }
    //修改数据
    setFieldsValue = newStore => {
        //1、修改store数据
        this.store = {
            ...this.store,
            ...newStore
        }
        //2、让组件更新，渲染数据
        this.fieldEntities.forEach(entity=>{
            const {name} = entity.props
            Object.keys(newStore).forEach(key=>{
                //只更新修改的
                if(key === name){
                    entity.onStoreChange()
                }
            })
        })
    }
    //获取数据
    getFieldValue = name => {
        return this.store[name]
    }
    getFieldsValue = () => {
        return {...this.store}
    }
    //方法传出，避免实例被污染
    getForm = () => {
        return {
            setFieldsValue: this.setFieldsValue,
            getFieldValue: this.getFieldValue,
            registerField: this.registerField
        }
    }
}

export default function useForm() {
    //useRef做缓存，方便复用
    const fromRef = useRef()
    if(!fromRef.current){
        const formStore = new FormStore()
        fromRef.current = formStore.getForm()
    }
    return [fromRef.current]
}
