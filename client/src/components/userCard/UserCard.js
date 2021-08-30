import React from 'react'
import {Card ,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteUser, getUser } from '../../js/actions/userAction';
import EditUser from '../editUser/EditUser';
const UserCard = ({user}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title><h1>{user.firstName}</h1></Card.Title>
    <Card.Title><h1>{user.lastName}</h1></Card.Title>
    <Card.Title><h4>{user.age}</h4></Card.Title>
    <Card.Text>
     {user.email}
    </Card.Text>
    <Button variant="primary" onClick={()=>{dispatch(deleteUser(user._id)); dispatch(getUser())}}>delete </Button>
    <EditUser user={user}/>
  </Card.Body>
</Card>
        </div>
    )
}

export default UserCard

