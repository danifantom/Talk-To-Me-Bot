const API_AI_TOKEN = '688268c07d5941ae961e2ee652d37aa4';
const apiAiClient = require('apiai')(API_AI_TOKEN);

const FACEBOOK_ACCESS_TOKEN = 'EAAEJyCm3I84BAOIB8VGmoE88PGWkOFZBZChODDBZCcwGnGjud9xwcK7b3pFffuPRlMIhiGgMw0o1w5I74sdausdNYl3aSO7t7O0FjJ325L9CIFGIFU5ye4Q2R17WZA5RhnQK5aCPOhHmq7X1UN0ZA0e2TcKtnxiZCVGXxkgzQQ7QZDZD';
const request = require('request');

const sendTextMessage = (senderId, text) => {
	request({
		url: 'https://graph.facebook.com/v2.6/me/messages',
		qs: { access_token: FACEBOOK_ACCESS_TOKEN},
		method: 'POST',
		json:{
			recipient: {id: senderId},
			message: {text},
		}
	});
};

module.exports = (event) => {
	const senderId = event.sender.id;
	const message = event.message.text;

	const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'talktomebot'});

	apiaiSession.on('response', (response) => {
		const result = response.result.fulfillment.speech;

		sendTextMessage(senderId, result);
});

	apiaiSession.on('error', error => console.log(error));
		apiaiSession.end();
};