import { User } from '../../types/Data'

type UserCardProps = {
  user: User
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  console.log(user)
  return <p>User card</p>
}

export default UserCard
