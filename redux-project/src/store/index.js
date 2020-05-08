import { createStore } from 'redux'
import { 
    ADD_NUM,
    REDUCE_NUM,
    CHANGE_NUM
 } from './actionType'
/*
    action
    {
        type: 类型 字符串常量
        data
    }
 */

// const ADD_NUM = 'ADD_NUM'
// const REDUCE_NUM = 'REDUCE_NUM'
// const CHANGE_NUM = 'CHANGE_NUM'

function AddActionCreator(data){
    return {
        type: ADD_NUM,
        data
    }
}

function ReduceActionCreator(data){
    return {
        type: REDUCE_NUM,
        data
    }
}

function ChangeActionCreator(data){
    return {
        type: CHANGE_NUM,
        data
    }
}

// function reducer(preState=0, action) {
//     if(action.type == ADD_NUM) {
//         return preState + action.data
//     } else {
//         return preState
//     }
// }

function reducer(preState=1, action){
    switch(action.type) {
        case ADD_NUM:
            return preState + action.data

        case REDUCE_NUM:
            return preState - action.data

        case CHANGE_NUM:
            return action.data
        
        default: 
            return preState
    }
}

const store = createStore(reducer)

export {
    store,
    AddActionCreator,
    ReduceActionCreator,
    ChangeActionCreator
}