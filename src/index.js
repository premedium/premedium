import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import users from './routes';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(compression());

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/', router);
app.use('/api', users);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${port} port.`);
});
