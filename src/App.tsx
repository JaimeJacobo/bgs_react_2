import {useEffect, useState} from 'react'
import './App.css'
import UserCard from './components/user.card/user-card'

import handleAPICall from './utilities/api'

import {Data} from './types/Data'
import DropDown from "./components/drop-down-menu/drop-down"

function App() {
  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)

  useEffect(() => {
    const callApi = async () => {
      try {
        const fetchResult = await handleAPICall('5')
        setDataApi(fetchResult)
      } catch (err) {
        console.log(err)
      }
    }

    callApi()
  }, [])

  return (
    <div className="App">
      <p>App</p>
      {dataApi ? <UserCard user={dataApi.results} /> : <p>Loading...</p>}
      <DropDown />
    </div>
  )
}

export default App
