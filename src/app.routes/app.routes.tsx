// React
import {useState, Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

// Types
import {Data} from '../types/Data'
// import HomePage from '../pages/home'
// import AllUsersPage from '../pages/allUsers'

// Pages
const HomePage = lazy(() => import('../pages/home'))
const RandomUserPage = lazy(() => import('../pages/random.user'))
const AllUsersPage = lazy(() => import('../pages/all.users'))
// Components
// const UserList = lazy(() => import('../components/user.list/user-list'))
// const DropDown = lazy(() => import('../components/drop-down-menu/drop-down'))
// const HomePage = lazy(() => import('../components/drop-down-menu/drop-down'))
// const LoginPage = lazy(() => import('../pages/login.page'))

export function AppRoutes() {
  const [dataApi, setDataApi] = useState<Data | undefined>(undefined)
  const [loadingApi, setLoadingApi] = useState<boolean>(false)

  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/random-users"
            element={<RandomUserPage></RandomUserPage>}
          ></Route>
          <Route
            path="/all-users"
            element={<AllUsersPage></AllUsersPage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
