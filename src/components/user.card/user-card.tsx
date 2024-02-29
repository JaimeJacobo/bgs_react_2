// React
import {useState, useEffect} from 'react'

// Bootstrap
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {User} from '../../types/Data'
import handleApiFlagsCall from '../../utilities/api.flags'
import {DataFlags} from '../../types/data-flags'

// CSS
import './user-card.css';

// Components
import LoadingComponent from '../loading-component/loading-component'

// Types
type UserCardProps = {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  const [countryInfo, setCountryInfo] = useState<DataFlags[]>([])
  const [show, setShow] = useState<boolean>(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    const makeApiCall = async () => {
      const resultFromAPI = await handleApiFlagsCall(user.location.country)
      setCountryInfo(resultFromAPI)
    }

    makeApiCall()
  }, [user.location.country])

  return (
    <Card style={{width: '18rem'}}>
      <Card.Img variant="top" src={user.picture.large} />
      <Card.Body>
        <div className='flagImgContainer'>
          <Card.Title>
            {user.name.title} {user.name.first} {user.name.last}
          </Card.Title>
          {countryInfo.length ? (
            <img className='flagImg'
              src={countryInfo[0].flags.png}
              alt={countryInfo[0].flags.alt}
            ></img>
          ) : (
            <LoadingComponent />
          )}
        </div>
        <Card.Text>
          Adress: {user.location.street.name} {user.location.street.number}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Contact me
        </Button>
        
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {user.name.title} {user.name.first} {user.name.last}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>email: {user.email}</p>
            <p>telephone: {user.phone}</p>
            <p>cell: {user.cell}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  )
}

export default UserCard
