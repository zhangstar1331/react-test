import React,{useContext} from 'react'
import { ThemeContext, UserContext } from '../Context'

export default function UserPage() {
    //可接收多个Context来源
    const ctx = useContext(ThemeContext)
    const userCtx = useContext(UserContext)
    const {themeColor} = ctx
    const {name} = userCtx
    return (
        <div>
            <h4 className={themeColor}>我是孙子-{name}</h4>
        </div>
    )
}
