import cors from 'cors';
import express from 'express';

import { router } from './router';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
