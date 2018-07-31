const express = require('express');
//to parse incoming request bodies
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, () => console.log('Webhook server is listening, port 3000'));

const verificationController = require('./webHooks/verification');
const messageWebhookController = require('./webHooks/messageWebhooks');

app.get('/webhook', verificationController);
app.post('/webhook', messageWebhookController);