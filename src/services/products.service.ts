import { IServiceResp } from '../interfaces';
import { IProduct } from '../interfaces/product.interface';
import ProductsMapper from '../dataMappers/products.mapper';

export default class ProductService {
  productsMapper;

  constructor(productsModel = new ProductsMapper()) {
    this.productsMapper = productsModel;
  }

  async createNew({ name, amount }: IProduct): Promise<IServiceResp<IProduct>> {
    const productCreated = await this.productsMapper.create({ name, amount });

    return { statusCode: 201, data: productCreated };
  }
}
