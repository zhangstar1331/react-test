import React, { useState, useEffect, useMemo, useCallback, PureComponent } from 'react'

export default function HookPage() {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")
    //副作用，相当于类组件中的didMount、didUpdate、willUnmount
    useEffect(() => {
        document.title = `点击了${count}次`
    }, [count])//依赖项，只有数组里面的值发生改变才执行

    //useMemo,依赖项改变的时候才重新计算
    const expensive = useMemo(() => {
        console.log('变化')
        let sum = 0
        for (let i = 0; i < count; i++) {
            sum += i
        }
        return sum
    },[count])

    //useCallback
    const addClick = useCallback(() => {
        let sum = 0
        for (let i = 0; i < count; i++) {
            sum += i
        }
        return sum
    },[count])

    return (
        <div>
            <h2>使用Hook（Hook就是js函数，不过有两个规则）</h2>
            <p>1、只能在函数最外层调用hook，不能在循环、条件判断或者子函中调用</p>
            <p>2、只能在React的函数组件或者自定义的Hook中调用，不能在其他js函数中调用</p>
            <p>{count}</p>
            <p>{expensive}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/>

            <h2>自定义hook</h2>
            {/* 函数内部可以调用其他的hook */}
            <p>{useClock().toLocaleTimeString()}</p>

            <Child addClick={addClick}/>
        </div>
    )
}

//自定义hook命名必须以use开头
function useClock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        //清除副作用
        return () => clearInterval(timer)
    }, [])
    return date
}


class Child extends PureComponent {
    render() {
        console.log('child render')
        const {addClick} = this.props
        return (
            <div>
                <h3>Child</h3>
                <button onClick={()=>console.log(addClick())}>add</button>
            </div>
        )
    }
}
