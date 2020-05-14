import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handelClick = this.handelClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log('child render');
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
    //一个组件要从父组件接收参数
    //只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    //当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;