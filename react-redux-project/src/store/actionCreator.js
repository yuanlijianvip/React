import { 
    ADD_NUM,
    REDUCE_NUM,
    CHANGE_NUM
 } from './actionType'

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

export {
    AddActionCreator,
    ReduceActionCreator,
    ChangeActionCreator
}