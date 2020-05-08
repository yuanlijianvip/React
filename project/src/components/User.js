import React, { Component } from 'react';

import {Route, Link} from 'react-router-dom'

import Create from './Create'
import List from './List'

class User extends Component {
    render() {
        let {path} = this.props.match
        return (
            <div>
                用户管理

                <Link to={`${path}/create`}>create</Link>
                <Link to={`${path}/list`}>list</Link>

                <Route path={`${path}/create`} component={Create}></Route>
                <Route path={`${path}/list`} component={List}></Route>
            </div>
        );
    }
}

export default User;