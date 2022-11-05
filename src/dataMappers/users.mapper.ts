import { IUser } from '../interfaces';
import usersModelObj from '../models/users.model';

class UsersMapper {
  private usersModel;

  constructor(usersModel = usersModelObj) {
    this.usersModel = usersModel;
  }

  async create(user: IUser): Promise<IUser> {
    const product = await this.usersModel.insert(user);

    return product;
  }

  async getByUserName(username: string): Promise<IUser | undefined> {
    const user = await this.usersModel.getByUsername(username);
    return user;
  }
}

export default new UsersMapper();