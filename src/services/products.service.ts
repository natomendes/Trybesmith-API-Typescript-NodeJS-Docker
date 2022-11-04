import { IServiceResp, IProduct } from '../interfaces';
import productsMapperObj from '../dataMappers/products.mapper';

class ProductService {
  private productsMapper;

  constructor(productsModel = productsMapperObj) {
    this.productsMapper = productsModel;
  }

  async getAll(): Promise<IServiceResp<IProduct[]>> {
    const products = await this.productsMapper.getAll();

    return { statusCode: 200, data: products };
  }

  async createNew({ name, amount }: IProduct): Promise<IServiceResp<IProduct>> {
    const productCreated = await this.productsMapper.create({ name, amount });

    return { statusCode: 201, data: productCreated };
  }
}

export default new ProductService();