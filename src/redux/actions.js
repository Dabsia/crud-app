import { actionTypes } from "./actionTypes";
import axios from "axios";

// Fetching the data
export const getUsers = (users) => ({
    type: actionTypes.GET_USERS,
    payload: users
})

export const loadUsers = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}`)
            .then(res => {
            dispatch(getUsers(res.data))
            })
        .catch(err => console.log(err))
    }
}

// Deleting user Data

const userDeleted = () => ({
    type: actionTypes.DELETE_USER
})

export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
            .then(res => {
                console.log('res', res)
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
        .catch(err => console.log(err))
    }
}

// Add User

const userAdded = () => ({
    type: actionTypes.ADD_USER
})

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_API}`, user)
            .then(res => {
                console.log('res', res)
                dispatch(userAdded())
                
            })
        .catch(err => console.log(err))
    }
}

// Edit User Details
// the first part is to get the values into the edit user page
const getUser = (user) => ({
    type: actionTypes.GET_SINGLE_USER,
    payload: user
})

export const getSingleUser = (id) => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then(res => {
                console.log('res', res)
                dispatch(getUser(res.data))
            })
        .catch(err => console.log(err))
    }
}

// Then u can then update the user detail

const userUpdated = () => ({
    type: actionTypes.UPDATE_USER,
})

export const updateUser = (id, user) => {
    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
            .then(res => {
                console.log('res', res)
                dispatch(userUpdated())
                dispatch(loadUsers())
            })
        .catch(err => console.log(err))
    }
}