import {

    USER_FETCH_FAIL,
    USER_FETCH_REQUEST,
    USER_FETCH_SUCCESS,
} from '../constant/userConstant'
import axios from 'axios'

export const getUsers = (row) => {
    return (dispatch) => {
        dispatch({
            type: USER_FETCH_REQUEST,
        })



        const url = `https://jsonplaceholder.typicode.com/users?_start=0&_limit= ${row}`
        axios
            .get(url)
            .then((response) => {
                dispatch({
                    type: USER_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}



export const getAllUsers = () => {
    
    console.log("🚀 ~ file: userAction.js ~ line 63 ~ getAllUsers ~ getAllUsers")
    return (dispatch) => {
        dispatch({
            type: USER_FETCH_REQUEST,
        })



        const url = `https://jsonplaceholder.typicode.com/users`
        axios
            .get(url)
            .then((response) => {
                dispatch({
                    type: USER_FETCH_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_FETCH_FAIL,
                    payload: error,
                })
            })
    }
}

