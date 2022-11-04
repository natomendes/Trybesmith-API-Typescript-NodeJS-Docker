import { IProduct } from '../interfaces';
import ProductsModel from '../models/products.model';

export default class ProductsMapper {
  productsModel;

  constructor(productsModel = new ProductsModel()) {
    this.productsModel = productsModel;
  }

  async create({ name, amount }: IProduct): Promise<IProduct> {
    const product = await this.productsModel.insert({ name, amount });

    return product;
  }
}
