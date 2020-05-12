import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handelInputChange.bind(this)}
                    />
                    <button onClick={this.handelBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                        return (
                            <li 
                                key={index} 
                                onClick={this.handelItemDelete.bind(this, index)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handelInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handelBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handelItemDelete(index) {
        // immutable 
        // state不允许做任何的改变
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
}

export default TodoList;