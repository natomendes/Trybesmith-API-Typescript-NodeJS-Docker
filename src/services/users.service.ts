import { IServiceResp, IUser } from '../interfaces';
import usersMapperObj from '../dataMappers/users.mapper';
import JwtServiceObj from './jwt.service';

class UserService {
  private usersMapper;

  private jwtService;

  constructor(usersMapper = usersMapperObj, jwtService = JwtServiceObj) {
    this.usersMapper = usersMapper;
    this.jwtService = jwtService;
  }

  async createNew(user: IUser): Promise<IServiceResp<IUser>> {
    const userCreated = await this.usersMapper.create(user);

    const token = this.jwtService.generateToken(userCreated);

    return { statusCode: 201, data: { token } };
  }
}

export default new UserService();