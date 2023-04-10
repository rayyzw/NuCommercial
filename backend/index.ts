import express, { Express } from 'express';
import cors from 'cors';
import user from './routers/user';
import realtor from './routers/realtor';
import property from './routers/property';
import mail from './routers/mail';
import { log } from './middlewares';
const app: Express = express();
const port = 3001;

const allowedOrigins = "*";

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

app.use(log);

app.use('/api/', user);
app.use('/api/', realtor);
app.use('/api/', property);
app.use('/api/', mail);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


