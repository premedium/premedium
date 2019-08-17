import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';

const app = express();
const router = express.Router();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());
app.use(compression());
app.use('/', router);

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});
router.post('/testapi', (req, res) => {
  res.send({ test: 'Test' });
});

router.post('/testtest', (req, res) => {
  res.send({ test: 'Test11111' });
});

router.post('/api/test', (req, res) => {
  res.send({ test: 'Test API' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${port} port.`);
});
