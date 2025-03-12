import express, { Response } from 'express';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import { logger, useHomepageTemplate } from './app/lib/utils';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;
const corsOptions: CorsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001'],
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('common', {
  stream: {
    write: message => logger.info(message.trim()), 
  }
}));

app.get('/', (_, res: Response) => {
  const readmePath = path.join(__dirname, 'readme.md');

  fs.readFile(readmePath, 'utf-8', async (err, data) => {
    if (err) {
      return res.send(useHomepageTemplate('Smuv Flash Sale Backend is online!'));
    }

    const htmlContent = await marked(data);

    res.send(useHomepageTemplate(htmlContent));
  });
});

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
});
