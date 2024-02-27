// React
import {Suspense, lazy} from 'react'
import {Route, Routes} from 'react-router-dom'

// Pages
const HomePage = lazy(() => import('../pages/home'))
const RandomUserPage = lazy(() => import('../pages/random.user'))
const AllUsersPage = lazy(() => import('../pages/all.users'))

export function AppRoutes() {
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
          <Route
            path="/all-users/:page"
            element={<AllUsersPage></AllUsersPage>}
          ></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
