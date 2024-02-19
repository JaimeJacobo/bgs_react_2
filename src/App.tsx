// React
import {useState} from 'react'

// CSS
import './App.css'

// Components
import UserList from './components/user.card/user-card'
import DropDown from './components/drop-down-menu/drop-down'

// Types
import {Data} from './types/Data'

function App() {
  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)
  const [loadingApi, setLoadingApi] = useState<boolean>(false)

  return (
    <div className="App">
      <p>App</p>
      <DropDown setDataApi={setDataApi} setLoadingApi={setLoadingApi} />
      {dataApi && <UserList users={dataApi.results} loadingApi={loadingApi} />}
    </div>
  )
}

export default App
