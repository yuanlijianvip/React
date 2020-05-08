import React, { Component } from 'react';

import {Route, Link} from 'react-router-dom'


class Nav extends Component {
    constructor(params){
        super(params)

        this.list = [
            {
                "id": 1,
                "title": "轮播图信息"
            },
            {
                "id": 2,
                "title": "用户管理",
                "children": [
                    {
                        "id": 3,
                        "title": "创建用户"
                    },
                    {
                        "id": 4,
                        "title": "用户列表"
                    }
                ]
            },
            {
                "id": 5,
                "title": "课程分类",
                "children": [
                    {
                        "id": 6,
                        "title": "课程分类",
                        "children": [
                            {
                                "id": 7,
                                "title": "初级",
                                "children": [
                                    {
                                        "id": 8,
                                        "title": "html"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "title": "中级",
                        "children": [
                            {
                                "id": 10,
                                "title": "react"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 11,
                "title": "后端",
                "children": [
                    {
                        "id": 12,
                        "title": "java"
                    },
                    {
                        "id": 13,
                        "title": "python"
                    }
                ]
            }
        ]
    }

    forward(){
        this.props.history.goForward();
    }
    render() {
        let {path} = this.props.match

        let data = this.props.data || this.list
        return (
            <div>
               <h1>导航</h1> 
               <button onClick={this.forward.bind(this)}>goforward</button>
                <div>
                    {
                        data.map(item => (
                            item.children ? (
                                <Link key={item.id} to={`${path}/${item.id}`}>{item.title}</Link>
                            ) : (
                            <span key={item.id}>{item.title}</span>
                            )
                        ))
                    }
                </div>

                <div>
                    {
                        data.map(item => (
                            // <Route key={item.id} path={`${path}/${item.id}`} component={Nav}></Route>
                            <Route key={item.id} path={`${path}/${item.id}`} render={(props) => (
                                <Nav {...props} data={item.children}/>
                            )}></Route>
                        ))
                    }
                </div>


                {/* <div>
                    <Link to={`${path}/banner`}>banner</Link>
                    <Link to={`${path}/user`}>user</Link>
                </div>
                <div>
                    <Route path={`${path}/banner`} component={Banner}></Route>
                    <Route path={`${path}/user`} component={User}></Route>
                </div> */}
            </div>
        );
    }
}

export default Nav;