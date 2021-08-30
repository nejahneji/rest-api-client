import { ADD, DELETE, EDIT, GET } from "../types";

 const initialState={
     users : [],
     loading : true
 }
 const userReducer = (state=initialState , {type, payload}) => {
     switch (type) {
         case GET:
             return {...state, loading :false , users : payload}
         case DELETE :
             return {...state, loading : false , users: state.users.filter(el => el._id !== payload._id )}
         case EDIT: 
             return {...state, loading : false , users : state.users.map(el => el._id===payload._id ? payload: el)}
         case ADD :
             return {...state , loading : false , users : [...state.users, payload]}
         default:
             return state 
     }
 }
 export default userReducer