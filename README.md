A full-stack web app, front-end build with react, back-end with dockerize node server and postgres database.

for activate on your localhost -
1. clone this repo


2. add your own free API keys from openweathermap.com and clarifi.com at src/controllers/weather-hooks/components/APIcall and in server/controllers/image

3.$ cd Async-Component/server

$ docker-compose up

4.In new terminal
$ cd Async-Component

$ npm install

$ npm start 

the backend expects the front-end to be on port 3000 (react default), in case your local machine turns other place change it at server/server.js.