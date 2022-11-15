import { Request, Response } from 'express';

import { Order  } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response) {

  try {
    const { orderId } = req.params;
    await Order.findByIdAndDelete(orderId);

    res.status(200).json({
      status: 'success',
      data: {
        data: null
      },
    });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
