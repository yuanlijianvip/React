import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    AddActionCreator,
    ReduceActionCreator,
    ChangeActionCreator
 } from '../store/actionCreator'

function mapStateToProps(state) {
    return {
        number: state.number
    };
}

function mapDispatchToProps(dispatch) {
    return {
        add: () => {
            dispatch(AddActionCreator(3))
        },
        reduce: () => {
            dispatch(ReduceActionCreator(2))
        },
        change: () => {
            let data = Math.random()
            dispatch(ChangeActionCreator(data))
        }
    };
}

class Count_new extends Component {
    render() {
        return (
            <div>
                <p>number: {this.props.number}</p>

                <button onClick={this.props.add}>add</button>
                <button onClick={this.props.reduce}>reduce</button>
                <button onClick={this.props.change}>change</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count_new);