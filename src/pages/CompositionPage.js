import React, { Component } from 'react'
import Layout from './Layout'
import RouterPage from './RouterPage';
export default class CompositionPage extends Component {
    render() {
        return (
            <Layout showTopBar={true} showBottomBar={true} title="组件复合">
                {/* 
                    非具名
                    <div>
                        <h3>组件复合</h3>
                    </div> 
                */}
                {/* 具名 */}
                {{
                    content:(
                        <div>
                            <RouterPage/>
                        </div>
                    ),
                    txt:'文本',
                    btnClick:()=>{
                        console.log('btnClick')
                    }
                }}
            </Layout>
        )
    }
}
