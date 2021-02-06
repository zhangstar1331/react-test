import React, {useState, useEffect} from 'react'
//函数式组件
export default function FunctionComponent(props) {
    const [date, setDate] = useState(new Date())
    //副作用
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        },1000)
        //组件卸载
        return () => clearInterval(timer)
    },[])//依赖项
    return (
        <div>
            <h2>函数式组件</h2>
            {date.toLocaleTimeString()}
        </div>
    )
}
