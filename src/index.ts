import express from 'express';
import mongoose from 'mongoose';

import morgan from 'morgan';

import { router } from './router';

const dbPort = 27017;

mongoose.connect(`mongodb://localhost:${dbPort}`)
  .then(() => {

    const app = express();
    const port = 3001;

    app.use(morgan('dev'));

    app.use(express.json());
    app.use('/api/v1/', router);

    app.listen(3001, () => {
      console.log(`💾 Connected do MongoDB on port: ${dbPort}`);
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('erro'));

