// React
// import {useState} from 'react'

// CSS
import './App.css'

// Components
// import UserList from './components/user.list/user-list'
// import DropDown from './components/drop-down-menu/drop-down'
import Header from './components/header/header'
import { AppRoutes } from './app.routes/app.routes'

// // Types
// import {Data} from './types/Data'

function App() {
  // const [dataApi, setDataApi] = useState<Data | undefined>(undefined)
  // const [loadingApi, setLoadingApi] = useState<boolean>(false)

  return (
    <div className="App">
      <Header></Header>
      <AppRoutes></AppRoutes>
      {/* <p>App</p>
      <DropDown setDataApi={setDataApi} setLoadingApi={setLoadingApi} />
      {dataApi && <UserList users={dataApi.results} loadingApi={loadingApi} />} */}
    </div>
  )
}

export default App