import 'dotenv/config';
import express, { response } from 'express';

import { router } from './routes';

const app = express();

app.use(router);

app.get('/github', (request, response) => {
  return response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
});

app.get('/signin/callback', (request, response) => {
  const { code } = request.query;

  return response.json(code);
});

app.listen(4000, () => console.log(`🚀 Server running on http://localhost:4000`));