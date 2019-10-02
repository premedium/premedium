import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as path from 'path';

import routes from './routes';
import { PORT } from './constants';

const app = express();
const appRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

appRouter.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/', appRouter);
app.use('/api', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${PORT} port.`);
});
