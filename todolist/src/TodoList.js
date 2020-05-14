import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List, Typography } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input placeholder='todo info' value={this.state.inputValue} style={{width: '300px', marginRight: '10px'}}/>
                <Button type="primary">提交</Button>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default TodoList;