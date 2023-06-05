import config from '../../../config/index'
import { IUser } from './user.interface'
import { User } from './users.model'
import { generateUserId } from './users.utils'

const createrUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated incremant id
  //default password

  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}

export default {
  createrUser,
}
