import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const checkUsername = (username: unknown): void => {
  if (username === undefined) throw new HttpException(400, '"username" is required');

  if (typeof username !== 'string') throw new HttpException(422, '"username" must be a string');

  if (username.length < 3) {
    throw new HttpException(
      422,
      '"username" length must be at least 3 characters long',
    );
  }
};

const checkClasse = (classe: unknown): void => {
  if (classe === undefined) throw new HttpException(400, '"classe" is required');

  if (typeof classe !== 'string') throw new HttpException(422, '"classe" must be a string');

  if (classe.length < 3) {
    throw new HttpException(
      422,
      '"classe" length must be at least 3 characters long',
    );
  }
};

const checkLevel = (level: unknown): void => {
  if (level === undefined) throw new HttpException(400, '"level" is required');
  
  if (typeof level !== 'number') throw new HttpException(422, '"level" must be a number');

  if (level < 1) {
    throw new HttpException(
      422,
      '"level" must be greater than or equal to 1',
    );
  }
};

const checkPassword = (password: unknown): void => {
  if (password === undefined) throw new HttpException(400, '"password" is required');
  
  if (typeof password !== 'string') throw new HttpException(422, '"password" must be a string');

  if (password.length < 8) {
    throw new HttpException(
      422,
      '"password" length must be at least 8 characters long',
    );
  }
};

const validateUser = (req: Request, _res: Response, next: NextFunction) => {
  const { username, password, classe, level } = req.body;
  checkUsername(username);
  checkClasse(classe);
  checkLevel(level);
  checkPassword(password);
  next();
};

export default validateUser;