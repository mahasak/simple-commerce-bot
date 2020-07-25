import express from 'express';
import webhook from './webhook';
import authorize from './authorize'

export default (app: express.Application) => {
  const router = express.Router();
  app.use(express.json());

  app.use('/webhook', webhook);
  app.use('/authorize', authorize);

};