import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }

    render() {
        return (
            <div onClick={this.handelClick}>
                {this.props.content}
            </div>
        )
    }

    handelClick() {
        this.props.deleteItem(this.props.index);
    }
}

export default TodoItem;