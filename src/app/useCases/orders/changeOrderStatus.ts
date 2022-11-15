import { Request, Response } from 'express';

import { Order  } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {

  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      res.status(400).json({
        status: 'fail',
        message: 'Status must be WAITING, IN_PRODUCTION or DONE.'
      });
    }

    const order = await Order.findByIdAndUpdate(orderId, { status });

    res.status(202).json({
      status: 'success',
      data: {
        data: order,
      },
    });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
