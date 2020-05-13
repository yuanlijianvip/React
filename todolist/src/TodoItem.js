import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }

    render() {
        const { content } = this.props
        return (
            <div onClick={this.handelClick}>
                {content}
            </div>
        )
    }

    handelClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
        // this.props.deleteItem(this.props.index);
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string, PropTypes.number),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;