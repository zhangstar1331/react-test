import React, { Component } from 'react'
import {ThemeConsumer, UserConsumer, UserContext} from '../Context'
export default class ConsumerPage extends Component {
    render() {
        return (
            <div>
                <ThemeConsumer>
                    {themeContext=>(
                        <div className={themeContext.themeColor}>
                            <UserConsumer>
                                {UserContext=>(
                                    <div>{UserContext.name}</div>
                                )}
                            </UserConsumer>
                        </div>
                    )}
                </ThemeConsumer>
            </div>
        )
    }
}
