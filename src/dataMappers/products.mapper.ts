import { IProduct } from '../interfaces';
import productsModelObj from '../models/products.model';

class ProductsMapper {
  private productsModel;

  constructor(productsModel = productsModelObj) {
    this.productsModel = productsModel;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.productsModel.findAll();

    return products;
  }

  async create({ name, amount }: IProduct): Promise<IProduct> {
    const product = await this.productsModel.insert({ name, amount });

    return product;
  }
}

export default new ProductsMapper();