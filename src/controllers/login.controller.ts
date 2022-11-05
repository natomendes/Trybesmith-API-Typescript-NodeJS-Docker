import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import loginServiceObj from '../services/login.service';

class LoginController {
  private loginService;

  constructor(loginService = loginServiceObj) {
    this.loginService = loginService;
  }

  authenticateUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password }: IUser = req.body;
    const { statusCode, data } = await this.loginService.authenticateUser({ username, password });

    res.status(statusCode).json(data);
  };
}

export default new LoginController();