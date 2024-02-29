// React
import {useParams, useNavigate, Navigate} from 'react-router-dom'
import {useEffect, useRef, useState} from 'react'

// Bootstrap
import Pagination from 'react-bootstrap/Pagination'

// Utilities
import handleAPICall from '../utilities/api'
import generateRandomSeed from '../utilities/generate-random-seed'

//Types
import {Data} from '../types/Data'
// import {User} from '../types/User'

// Components
import UserList from '../components/user.list/user-list'

const AllUsers = () => {
  let {page} = useParams()
  const navigate = useNavigate()

  // State
  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)
  const [loadingApi, setLoadingApi] = useState<boolean>(false)

  const myValueRef = useRef<undefined | string>(undefined)
  const usersStorageRef = useRef<any>({})

  if (!myValueRef.current) {
    myValueRef.current = generateRandomSeed()
  }

  useEffect(() => {
    const callAPI = async () => {
      const fetchAPI = await handleAPICall('5', page, myValueRef.current)
      usersStorageRef.current[page!] = fetchAPI
      setDataApi(fetchAPI)
    }
    if (usersStorageRef.current[page!]) {
      setDataApi(usersStorageRef.current[page!])
    } else {
      callAPI()
    }
  }, [page])

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
      {dataApi && <UserList users={dataApi.results} loadingApi={loadingApi} />}
    </div>
  )
}

export default AllUsers

// 10 paginas de 5 usuarios cada una//
// https://randomuser.me/api/?page=3&results=10&seed=abc
