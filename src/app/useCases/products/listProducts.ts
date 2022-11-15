import { Request, Response } from 'express';

import { Product  } from '../../models/Product';

export async function listCategories(req: Request, res: Response) {

  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        data: products,
      },
    });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
