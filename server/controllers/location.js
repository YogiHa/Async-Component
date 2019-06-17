const rp = require('request-promise');

let apiKey = 'your api key goes here';
const handleAPI = (req, res) =>{
let url = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&units=metric&appid=${apiKey}`;
  rp(url)
    .then(body => JSON.parse(body))
    .then(data=>{ 
    	res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'));
 }

const handleLocation = (req, res, db) => {
  const { id } = req.body;
  db('users').where('id', '=', id)
  .increment('entries', 1)
  .returning('entries')
  .then(entries => {
    res.json(entries[0]);
  })
  .catch(err => res.status(400).json('unable to get entries'))
}
module.exports = {
  handleAPI,
  handleLocation
}