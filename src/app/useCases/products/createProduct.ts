import { Request, Response } from 'express';

import { Product  } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {

  try {

    const imagePath = req.file?.filename;
    const { name, description, category, price, ingredients } = req.body;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath
    });

    res.status(201).json({
      status: 'success',
      data: {
        data: product,
      },
    });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
