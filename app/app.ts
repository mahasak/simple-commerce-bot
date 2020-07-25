import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import * as dotenv from "dotenv";
dotenv.config();

const APP_SECRET = process.env.APP_SECRET
const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN
const SERVER_URL = process.env.SERVER_URL

import { verifyRequestSignature } from './utils/verifyRequestSignature';

// Create a new express application instance
const app: express.Application = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));
console.log(APP_SECRET);
console.log(VALIDATION_TOKEN);
console.log(PAGE_ACCESS_TOKEN);
console.log(SERVER_URL);
if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
  console.error('Missing config values');
  process.exit(1);
}

// Use routes
routes(app);

// Start server
// Webhooks must be available via SSL with a certificate signed by a valid
// certificate authority.
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

export default app;