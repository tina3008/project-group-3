import express from 'express';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.use(helmet());

app.use(
  express.static(path.join(__dirname, 'src'), {
    maxAge: '30d',
  })
);

app.listen();
