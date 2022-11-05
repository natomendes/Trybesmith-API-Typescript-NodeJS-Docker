import { NextFunction, Request, Response } from 'express';
import HttpException from '../shared/http.exception';

const validateOrder = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds) throw new HttpException(400, '"productsIds" is required');

  if (!Array.isArray(productsIds)) throw new HttpException(422, '"productsIds" must be an array');

  const idsAreNumbers = productsIds.every((item) => typeof item === 'number');
  if (productsIds.length === 0 || !idsAreNumbers) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }

  next();
};

export default validateOrder;