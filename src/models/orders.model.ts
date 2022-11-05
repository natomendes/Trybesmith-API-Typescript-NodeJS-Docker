import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces';
import connectionObj from './connection';

class OrdersModel {
  public connection: Pool;

  constructor(connection = connectionObj) {
    this.connection = connection;
  }

  async findAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute(
      `SELECT
      pr.orderId AS id,
      Ord.userId,
      JSON_ARRAYAGG(pr.id) as productsIds
    FROM
      Trybesmith.Products as pr        
    INNER JOIN
      Trybesmith.Orders as Ord
    ON
      pr.orderId = Ord.Id
    GROUP BY pr.orderId`,
    );

    return result as IOrder[];
  }

  async insert(userId: number): Promise<IOrder> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    return { id: insertId, userId };
  }
}

export default new OrdersModel();