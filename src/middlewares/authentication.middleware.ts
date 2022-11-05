import { NextFunction, Request, Response } from 'express';
import { IUser } from '../interfaces';
import jwtService from '../services/jwt.service';
import HttpException from '../shared/http.exception';

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('Authorization');
  if (!token) throw new HttpException(401, 'Token not found');

  const decoded = jwtService.verifyToken(token);
  const user = decoded as IUser;
  delete user.password;
  req.body.user = user;

  next();
};

export default authentication;