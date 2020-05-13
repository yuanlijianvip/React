import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        //当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        this.handelInputChange = this.handelInputChange.bind(this);
        this.handelBtnClick = this.handelBtnClick.bind(this);
        this.handelItemDelete = this.handelItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    {/* 下面是一个input框 */}
                    <input 
                        id="insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handelInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handelBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    { this.getTodoItem() }
                    {/* {
                        this.state.list.map((item, index) => {
                        return (
                            <div>
                                <TodoItem 
                                    content={item} 
                                    index={index}
                                    deleteItem = {this.handelItemDelete}
                                />
                            </div>
                            )
                        })
                    } */}
                </ul>
                {/* <Test content={this.state.inputValue}/> */}
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    {/* key值不能用index，待修改 */}
                    <TodoItem 
                        content={item} 
                        index={index}
                        deleteItem = {this.handelItemDelete}
                    />
                </div>
                )
            }
        )
    }

    handelInputChange() {
        // const value = e.target.value;
        const value = this.input.value;

        this.setState(() => ({
            inputValue: value
        }))

        // this.setState(() => {
        //     return {
        //         inputValue: value
        //     }
        // })

        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handelBtnClick() {
        
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }),() => {
            console.log(this.ul.querySelectorAll('div').length);
        });
        console.log(this.ul.querySelectorAll('div').length);

        // this.setState(() => ({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // }))

        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handelItemDelete(index) {
        // immutable 
        // state不允许做任何的改变
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
        // const list = [...this.state.list];
        // list.splice(index, 1);
        // this.setState({
        //     list
        // })
    }
}

export default TodoList;