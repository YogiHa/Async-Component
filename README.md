A full-stack web app, front-end build with React.js, back-end with dockerize node server and postgres database.


for activate on your localhost -

1. clone this repo


2. add your own free API keys from openweathermap.com and clarifi.com at server/controllers/location and in server/controllers/image

3. the backend of the application while developing is running under Docker Compose. Installation:
https://docs.docker.com/compose/install/

4.



     $ cd Async-Component/server 

     $ npm install    

     $ (sudo) docker-compose up     



5. In new terminal





     $ cd Async-Component     

     $ npm install     

     $ npm start 





the backend expects the front-end to be on port 3000 (react default), in case your local machine turns other place change it at server/server.js.


V 3 -

added a selenium webdriver for running test (*config for manipulate chrome*) by:


     $ cd Async-Component
     $ npm run test