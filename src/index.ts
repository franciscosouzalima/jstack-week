import express from 'express';
import mongoose from 'mongoose';

const dbPort = 27017;

mongoose.connect(`mongodb://localhost:${dbPort}`)
  .then(() => {

    const app = express();
    const port = 3001;

    app.listen(3001, () => {
      console.log(`💾 Connected do MongoDB on port: ${dbPort}`);
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });

  })
  .catch(() => console.log('erro'));

