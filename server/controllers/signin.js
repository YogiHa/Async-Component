const jwt = require('jsonwebtoken');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

const handleSignin = (db, bcrypt , req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Promise.reject('incorrect form submission');
  } 
 return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => user[0])
          .catch(err => Promise.reject('unable to get user'))
      } else {
        Promise.reject('wrong credentials')
      }
    })
    .catch(err => Promise.reject('wrong credentials'))
}
const getAuthToken = (req, res) =>{
  const { authorization } = req.headers;
  return redisClient.get(authorization, (err, replay) => {
    if (err || !replay) {
      return res.status(400).json('UnAuthorized')
    } 
        return res.json({id: replay})
  })
}
const signToken = (email) => {
  const jwtPayload = { email }
  return jwt.sign(jwtPayload, 'secret goes here', {expiresIn: '2 days'});
}
const setToken = (key, value) => {
return Promise.resolve(redisClient.set(key, value))
}

const createSessions = (user) =>{
const { email, id } = user;
const token = signToken(email);
return setToken(token, id) 
.then(()=>{ return{ sucsess: 'true' , userId: id , token }})
.catch(console.log)
}
const signinAuth = (db, bcrypt) => (req, res) => {
  const { authorization } = req.headers;
  return authorization ? 
  getAuthToken(req, res) :  handleSignin(db, bcrypt, req, res) 
    .then(data => { 
      return data.id ? createSessions(data) : Promise.reject(data)
    })
  .then(session => res.json(session))
  .catch(err=>res.status(400).json(err))
}

module.exports = {
  signinAuth: signinAuth ,
  redisClient: redisClient
}