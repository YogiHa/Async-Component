const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');
const compression = require('compression');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const location = require('./controllers/location');
const auth =require('./controllers/auth');

const app = express();
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const whiteList = ['http://localhost:3000'];
const corsOptions = {
	origin: function(origin, callback) {
		if (whiteList.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('NOT ALLOWED'))
		}
	}
}

app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(compression())

app.post('/signin', signin.signinAuth(db, bcrypt))
app.post('/register', (req, res) =>{register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) =>{ profile.handleProfileUpdate(req, res, db)})
app.put('/image', auth.requireAuth, (req, res) => { image.handleImage(req, res, db)})
app.put('/location', auth.requireAuth, (req, res) =>{location.handleLocation(req, res, db)})
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})

app.listen(process.env.PORT || 3001, ()=> {
  console.log(`app is running on port ${process.env.PORT || 3001 }`);
})
