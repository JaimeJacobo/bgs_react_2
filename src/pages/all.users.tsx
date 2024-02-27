// React
import {useParams, useNavigate, Navigate} from 'react-router-dom'

// Bootstrap
import Pagination from 'react-bootstrap/Pagination'

const AllUsers = () => {
  let {page} = useParams()
  const navigate = useNavigate()

  if (!page || parseInt(page) > 10 || !parseInt(page)) {
    return <Navigate to="/all-users/1" />
  }

  const handlePrevPage = () => {
    const link = '/all-users/' + (parseInt(page!) - 1)
    navigate(link)
  }

  const handleNextPage = () => {
    const link = '/all-users/' + (parseInt(page!) + 1)
    navigate(link)
  }

  return (
    <div>
      <Pagination>
        {parseInt(page) > 1 && <Pagination.Prev onClick={handlePrevPage} />}

        <Pagination.Item>{page}</Pagination.Item>

        {page && parseInt(page) < 10 && (
          <Pagination.Next onClick={handleNextPage} />
        )}
      </Pagination>
    </div>
  )
}

export default AllUsers

// 10 paginas de 5 usuarios cada una//
// https://randomuser.me/api/?page=3&results=10&seed=abc
