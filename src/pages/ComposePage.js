import React from 'react'

export default function ComposePage() {
    let arr = [1, 2, 3, 4]
    //reduce方法
    let summary = arr.reduce((sum, item) => sum + item)
    function f1(value){
        console.log(1111111)
    }
    function f2(value){
        console.log(2222222)
    }
    function f3(value){
        console.log(3333333)
        console.log(value)
    }
    function compose(...funs) {
        if (funs.length === 0) {
            return arg => arg
        }
        if (funs.length === 1) {
            return funs[0]
        }
        return funs.reduce((a, b) => (...args) => a(b(...args)))
    }
    compose(f1,f2,f3)('abc')
    return (
        <div>
            复合函数
            <p>{summary}</p>
        </div>
    )
}
