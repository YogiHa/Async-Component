const jwt = require('jsonwebtoken');
const redis = require('redis');

const redisClient = redis.createClient(process.env.REDIS_URI);

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
console.log(email, token)
return setToken(token, id) 
.then(()=>{ return{ sucsess: 'true' , userId: id , token }})
.catch(console.log)
}
const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission');
  }
  const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
           .then(user =>user[0])
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .then(data => { 
      return data.id ? createSessions(data) : Promise.reject(data)
    })
  .then(session => res.json(session))
    .catch(err => Promise.reject('unable to register'))
}
module.exports = {
  handleRegister: handleRegister
};


