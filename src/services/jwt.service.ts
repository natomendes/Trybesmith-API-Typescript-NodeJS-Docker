import * as JWT from 'jsonwebtoken';
import { IUser } from '../interfaces';
import HttpException from '../shared/http.exception';

class JWTService {
  private jwt;

  constructor(jwt = JWT) {
    this.jwt = jwt;
  }

  generateToken({ username, password, id }: IUser): string {
    return this.jwt.sign({ username, password, id }, process.env.JWT_SECRET as string);
  }

  verifyToken(token: string): string | JWT.JwtPayload {
    try {
      const decoded = this.jwt.verify(token, process.env.JWT_SECRET as string);
      return decoded;
    } catch (err) {
      throw new HttpException(401, 'Invalid token');
    }
  }
}

export default new JWTService();