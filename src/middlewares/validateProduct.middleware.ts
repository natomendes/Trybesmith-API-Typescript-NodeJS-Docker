import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const isNameValid = (name: unknown): void => {
  if (!name) throw new HttpException(400, '"name" is required');

  if (typeof name !== 'string') throw new HttpException(422, '"name" must be a string');

  if (name.length < 3) {
    throw new HttpException(
      422,
      '"name" length must be at least 3 characters long',
    );
  }
};

const isAmountValid = (amount: unknown): void => {
  if (!amount) throw new HttpException(400, '"amount" is required');

  if (typeof amount !== 'string') throw new HttpException(422, '"amount" must be a string');

  if (amount.length < 3) {
    throw new HttpException(
      422,
      '"amount" length must be at least 3 characters long',
    );
  }
};

const validateProduct = (req: Request, _res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  isNameValid(name);
  isAmountValid(amount);
  next();
};

export default validateProduct;