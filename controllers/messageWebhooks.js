const processMessage = require('C:/Users/Soha Parvez/nodeJS/Talk-To-Me-Bot/helpers/processMessage.js');

module.exports = (req, res) => {
	if(req.body.object === 'page') {
		req.body.entry.forEach(entry => {
			entry.messaging.forEach(event => {
				if(event.message && event.message.text) {
					processMessage(event);
				}
			});
		});
		res.status(200).end();
	}
};