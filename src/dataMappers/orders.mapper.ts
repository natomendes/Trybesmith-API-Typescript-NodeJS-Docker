import { IOrder } from '../interfaces';
import ordersModelObj from '../models/orders.model';

class OrdersMapper {
  private ordersModel;

  constructor(ordersModel = ordersModelObj) {
    this.ordersModel = ordersModel;
  }

  async getAll(): Promise<IOrder[]> {
    const orders = await this.ordersModel.findAll();

    return orders;
  }

  async create(userId: number): Promise<IOrder> {
    const order = await this.ordersModel.insert(userId);
    
    return order;
  }
}

export default new OrdersMapper();