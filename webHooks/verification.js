module.exports = (req, res) => {
	const hubChallenge = req.query['hub.challenge'];

	const hubMode = req.query['hub.mode'];
	const verifyTokenMatches = (req.query['hub.vertify_token'] === 'talktome');

	if(hubMode && verifyTokenMatches) {
		console.log("Tokens match");
		res.status(200).send(hubChallenge);
	}
	else{
		console.log("Tokens don't match")
		res.status(403).end();
	}
};