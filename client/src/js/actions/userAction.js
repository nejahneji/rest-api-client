
import axios from "axios" ;
import { ADD, DELETE, EDIT, GET } from "../types";





export const addUser = (firstName,lastName, email,age) => async(dispatch) => {
    try {
        const newUser ={firstName,lastName, email,age}; 
        let res = await axios.post('/users/add', newUser)
        dispatch({
            type:ADD ,
            payload: res.data
        })
    } catch (error) {
        alert('post error')
    }
}
export const deleteUser = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`/users/delete/${id}`)
        dispatch({
            type :DELETE, 
            payload : res.data
        })
    } catch (error) {
        alert ("delete error")
    }
}
 export const getUser = () => async (dispatch) =>{
     try {
         let res = await axios.get('/users/get')
         dispatch({
             type :GET,
             payload : res.data
         })
     } catch (error) {
         alert ('get error')
     }
 }
 export const editUser =(id, firstName,lastName, email,age) => async (dispatch) => {
     try {
         let editedUser= {firstName ,lastName, email,age}
         let res = await axios.put(`/users/update/${id}`, editedUser)
         dispatch({
             type : EDIT ,
             payload : res.data   
         })
     } catch (error) {
         alert('put error')
     }
 }
