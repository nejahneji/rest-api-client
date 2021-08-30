import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editUser, getUser } from '../../js/actions/userAction';

const EditUser = ({user}) => {
    const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>editUser</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="FirstName"
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              placeholder="LaststName"
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              placeholder="Email"
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              placeholder="Age"
              type="text"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              dispatch(editUser(user._id,firstName, lastName, email, age));
              dispatch(getUser());
              handleClose();
            }}
          >
            SAVE
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditUser
