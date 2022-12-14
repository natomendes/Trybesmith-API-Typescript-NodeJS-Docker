import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import usersServiceObj from '../services/users.service';

class UsersController {
  private usersService;

  constructor(usersService = usersServiceObj) {
    this.usersService = usersService;
  }

  createNew = async (req: Request, res: Response): Promise<void> => {
    const user: IUser = req.body;
    const { statusCode, data } = await this
      .usersService
      .createNew(user);

    res.status(statusCode).json(data);
  };
}

export default new UsersController();