import React, { Component } from 'react';

import {store, AddActionCreator, ReduceActionCreator, ChangeActionCreator} from '../store/index'

class Count extends Component {
    constructor(params){
        super(params)

        this.state = {
            number: store.getState()
        }

        store.subscribe(() => {
            this.setState({
                number: store.getState()
            })
        })
    }
    add() {
        let data = this.refs.oInput.value*1
        store.dispatch(AddActionCreator(data))
    }
    reduce() {
        let data = this.refs.oInput.value*1
        store.dispatch(ReduceActionCreator(data))
    }
    change() {
        let data = Math.random()
        store.dispatch(ChangeActionCreator(data))
    }
    render() {
        return (
            <div>
    
                <p>number:{this.state.number}</p>
                <p><input ref="oInput"/></p>
                <button onClick={this.add.bind(this)}>add</button>
                <button onClick={this.reduce.bind(this)}>reduce</button>
                <button onClick={this.change.bind(this)}>change</button>
            </div>
        );
    }
}

export default Count;