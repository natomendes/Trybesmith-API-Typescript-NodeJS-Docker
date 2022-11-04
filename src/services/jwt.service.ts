import * as JWT from 'jsonwebtoken';
import { IUser } from '../interfaces';

class JWTService {
  private jwt;

  constructor(jwt = JWT) {
    this.jwt = jwt;
  }

  generateToken({ username, password }: IUser) {
    return this.jwt.sign({ username, password }, process.env.JWT_SECRET as string);
  }
}

export default new JWTService();