const redisClient = require('./signin').redisClient;

const requireAuth = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).send('unAuthorized')
	}
	return redisClient.get(authorization, (err, reply) => {
		if (err || !reply) {
			return res.status(401).send('unAuthorized1')
		}
		return next()
	})
}
module.exports = {
	requireAuth: requireAuth
}