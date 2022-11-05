import { IServiceResp, IUser } from '../interfaces';
import usersMapperObj from '../dataMappers/users.mapper';
import JwtServiceObj from './jwt.service';
import HttpException from '../shared/http.exception';

class LoginService {
  private usersMapper;

  private jwtService;

  constructor(usersMapper = usersMapperObj, jwtService = JwtServiceObj) {
    this.usersMapper = usersMapper;
    this.jwtService = jwtService;
  }

  private async getUserByName(username: string): Promise<IUser | undefined> {
    const user = await this.usersMapper.getByUserName(username);
    return user;
  }

  async authenticateUser({ username, password }: IUser): Promise<IServiceResp<IUser>> {
    const user = await this.getUserByName(username);
    if (!user || user.password !== password) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const token = this.jwtService.generateToken(user);

    return { statusCode: 200, data: { token } };
  }
}

export default new LoginService();