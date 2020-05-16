import React, { Component } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from './store';
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
import axios from 'axios';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
            // <div style={{marginTop: '10px', marginLeft: '10px'}}>
            //     <Input 
            //         placeholder='todo info' 
            //         value={this.state.inputValue} 
            //         style={{width: '300px', marginRight: '10px'}}
            //         onChange={this.handleInputChange}
            //     />
            //     <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
            //     <List
            //         style={{marginTop: '10px', width: '300px'}}
            //         bordered
            //         dataSource={this.state.list}
            //         renderItem={(item, index) => (
            //             <List.Item onClick={this.handleItemDelete.bind(this, index)}>
            //                 {item}
            //             </List.Item>
            //         )}
            //     />
            // </div>
        );
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);

        
        //使用redux-thunk
        // const action = getTodoList();
        // store.dispatch(action);

        // axios.get('/list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // })
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(e.target.value);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
    //    const action = {
    //        type: DELETE_TODO_ITEM,
    //        index
    //    }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;