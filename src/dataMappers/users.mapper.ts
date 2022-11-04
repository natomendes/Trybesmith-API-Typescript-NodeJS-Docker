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
}

export default new UsersMapper();