// Bootdtrap
import Modal from 'react-bootstrap/Modal'

// Types
import {User} from '../../types/Data'

// Components
import LoadingComponent from '../loading-component/loading-component'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// React
import { useState } from 'react'

type UserCardProps = {
  users: User[]
  loadingApi: boolean
}

const UserList: React.FC<UserCardProps> = ({users, loadingApi}) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); 
  const handleShow = () => setShow(true);
  
  return (
    <>
      {loadingApi ? (
        <LoadingComponent />
      ) : (
        users.map((user, index) => (
          // <div key={index}>
          //   <img
          //     src={user.picture.large}
          //     alt={`${user.name.title} ${user.name.first}`}
          //   />
          //   <div>
          //     <p>
          //       Name: {user.name.title} {user.name.first} {user.name.last}
          //     </p>
          //     <p>
          //       Adress: {user.location.street.name}{' '}
          //       {user.location.street.number}
          //     </p>
          //     <p>Email: {user.email}</p>
          //     <p>Telefono: {user.phone}</p>
          //     <p>Movil: {user.cell}</p>
          //   </div>
          // </div>
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={user.picture.large} />
            <Card.Body>
              <Card.Title>
                {user.name.title} {user.name.first} {user.name.last}
              </Card.Title>
              <Card.Text>
                <div>
                  <p></p>
                  <p>
                    Adress: {user.location.street.name}{' '}
                    {user.location.street.number}
                  </p>

                </div>
              </Card.Text>
              <Button variant="primary" onClick={handleShow}>Contact me</Button>
            </Card.Body>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>INFO</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Email: {user.email}</p>
                <p>Telefono: {user.phone}</p>
                <p>Movil: {user.cell}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="primary">Save changes</Button>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Card>
        ))
      )}
    </>
  )
}

export default UserList
