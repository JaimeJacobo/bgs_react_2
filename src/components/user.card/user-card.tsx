import { User } from '../../types/Data'

type UserCardProps = {
  user: User[]
}

const UserCard: React.FC<UserCardProps> = ({user}) => {
  return <p>User card</p>
}

export default UserCard
