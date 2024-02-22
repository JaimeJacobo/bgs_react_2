// React
import {useState} from 'react'

// // Types
import {Data} from '../types/Data'

// Components
import UserList from '../components/user.list/user-list'
import DropDown from '../components/drop-down-menu/drop-down'

const RandomUserPage = () => {
  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)
  const [loadingApi, setLoadingApi] = useState<boolean>(false)

  return (
    <div>
      <p>Random user Page</p>
      <DropDown setDataApi={setDataApi} setLoadingApi={setLoadingApi} />
      {dataApi && <UserList users={dataApi.results} loadingApi={loadingApi} />}
    </div>
  )
}

export default RandomUserPage
