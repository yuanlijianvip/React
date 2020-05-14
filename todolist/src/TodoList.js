import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List, Typography } from 'antd';
import store from './store';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <Input 
                    placeholder='todo info' 
                    value={this.state.inputValue} 
                    style={{width: '300px', marginRight: '10px'}}
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
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

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
        console.log(e.target.value);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        }

        store.dispatch(action);
    }
}

export default TodoList;