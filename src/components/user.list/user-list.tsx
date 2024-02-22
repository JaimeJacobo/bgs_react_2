// Types
import {User} from '../../types/Data'

// Components
import LoadingComponent from '../loading-component/loading-component'
import UserCard from '../user.card/user-card'

type UserCardProps = {
  users: User[]
  loadingApi: boolean
}

const UserList: React.FC<UserCardProps> = ({users, loadingApi}) => {
  return (
    <>
      {loadingApi ? (
        <LoadingComponent />
      ) : (
        users.map((user) => <UserCard user={user} />)
      )}
    </>
  )
}

export default UserList
