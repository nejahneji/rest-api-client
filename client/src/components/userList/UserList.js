import React ,{useEffect}from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUser } from '../../js/actions/userAction';
import UserCard from '../userCard/UserCard';


export const UserList = () => {
    const {users,loading} = useSelector(state => state)
    console.log(users)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUser())
    }, [dispatch])
    
    return (
        <div>
            {(loading)? (<h1>loading...</h1>) :(<div>
            {
                users.map(user => <UserCard user={user} key={user._id}/>)
            }
        </div>)}
        </div>
    )
}
