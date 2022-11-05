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

  async getAllByIds(idsArray: number[]): Promise<IProduct[]> {
    const products = await this.productsModel.findAllByIds(idsArray);

    return products;
  }

  async create({ name, amount }: IProduct): Promise<IProduct> {
    const product = await this.productsModel.insert({ name, amount });

    return product;
  }

  async updateOrderIds(productsIds: number[], orderId: number): Promise<void> {
    await this.productsModel
      .updateOrderIds(productsIds, orderId);
  }
}

export default new ProductsMapper();