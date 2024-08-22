import { IUserDTO, IUser } from '../models/userModel'
export function transformUserDTO(user: IUserDTO): IUser {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
  }
}
