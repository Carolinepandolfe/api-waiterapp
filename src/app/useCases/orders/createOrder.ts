import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try{
    const {products,table} = req.body;

    const order = await Order.create({ products,table });

    res.status(201).json(order);

  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
}
