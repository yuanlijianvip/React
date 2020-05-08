import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'

class Index extends Component {

    back() {
      this.props.history.goBack();
    }
    fun() {
      // this.props.history.push('/about')
      this.props.history.push({
        pathname: 'about',
        search: '?id=10&channel=88',
        hash: '#123',
        state: {
          name: 'qm',
          age: 18
        },
        query: {
          channel: '888',
          tag: '123456'
        }
      })
      //query刷新页面丢失
      //BrowserRouter模式，state不丢失
    }
    render() {
        return (
            <div>
              {/* <Redirect to="/nav"/> */}
              首页
              <button onClick={this.back.bind(this)}>goBack</button>
              <button onClick={this.fun.bind(this)}>点击进入关于我们</button>
            </div>
        );
    }
}

export default Index;