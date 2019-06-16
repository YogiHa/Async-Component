import React from 'react';
import Scroll from '../../Scroll'
import AboutFooter from './AboutFooter'
import ScrollableAnchor from 'react-scrollable-anchor';
import './About.css';

function About() {

const sectionStyle = {
  padding: "0%",
  position: "fixed",
  left: "0",
  bottom: "0%",
  height: "85%",
  width: "100%",
 };

const phantomStyle = {
  display: "fixed",
  padding: "0%",
  height: "85%",
  width: "100%",
};

	return( <div className="App">
    <div style = {phantomStyle}>
    <div style = {sectionStyle}>
    <Scroll>
    <section className="cf w-100 h-45 pa2-ns">
    <h1 className="AboutHeader"> About </h1><br/><br/><br/>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns ">
     <a href="#react" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1 ">
       <img src={require('./logos/react.png')} 
        className="db bg-center cover aspect-ratio--object " alt='logo'/>
      </div>
      <h3 className="f5 f4-ns mb0 black-90 h3about">React</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#nodejs" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/nodejs.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
      <h3 className="f5 f4-ns mb0 black-90 h3about">Node-js</h3>
     </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#postgreSQL" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/psql.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">PostgreSQL</h3>
      </a>
    </article>
     <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#redis" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/redis.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">Redis</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#docker" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/docker.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">Docker</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#heroku" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
       <img src={require('./logos/heroku.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
      <h3 className="f5 f4-ns mb0 black-90 h3about">Heroku</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#styling" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/css3.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">Styling</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#lighthouse" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/lighthouse.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">Lighthouse</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="https://github.com/YogiHa/Async-Component" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/github.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90 h3about">View on github</h3>
      </a>
    </article>
    </section><br/><br/><br/><br/><br/>
     <ScrollableAnchor id={'react'}>
            <div> <h2 className="h2About"> React </h2>
            <p className="pAbout">This app was built with React advanced javascript framework. <br/>
             It's main idea is the "Async-Component", an easy tool to implemaint, with great peroformance scale.
             <br/> In first render-path, the server loads only what's nesseceary for first paint, and only afterwards keeps loading all other files.<br/>
              Another advantage of async-components concept, is it's diverse between states, each component holds it's own state, and a comunication between states is avialble in the App root.
              <br/>In this project there is also usuage of npm packages on top 'create-react-app' such as 'react-router', 'react-scrollable' and more  </p> </div>
          </ScrollableAnchor><br/> <br/>
         <ScrollableAnchor id={'nodejs'}>
            <div ><h2> Node-JS </h2>
            <p className="pAbout">Using most modern libaries such as express-js for app server, bcrypt for hashing passwords, morgan and CORS for security, knex for connecting databases and bodyParser for handling JSON files,
            this Node-JS server definitly up to date! </p>
             </div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'postgreSQL'}>
          <div><h2 className="h2About">PostgreSQL</h2>
          <p className="pAbout">This wonderful open-source Structured Query Language (SQL) framework holds users information, such name, email, points and date of joining the app.<br/>
          With commands such `insert( email )` and `updte( name )`, using knex in the server to handle the connection to the DB allows easy config, with readable english, no matter if the issue is adding new user, new atribute, or just updating existing user.</p> </div>
          </ScrollableAnchor><br/><br/>
           <ScrollableAnchor id={'redis'}>
            <div><h2 className="h2About"> Redis </h2>
            <p className="pAbout"> Want to go back to the app without login again? <br /> 
            Don't worry, Redis automaticly generate a unique token for you. <br/>
            Unlike postgreSQL, redis is non-relational database, what reveals the skill of combined diffrent tools, and taking each prons. <br/>
            p.s. , the token will be stored in the session storage, and will vanish once you log out/close this tab.
            </p>  </div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'docker'}>
          <div><h2 className="h2About"> Docker </h2> <p className="pAbout">
            Actually, all three elements above were kind of lie.<br/> The reason for that is that those three elements are running together under just one container in development mode.<br/>
            Docker preventing a uniform OS, and in it handle all the backend operation, installing and execute three diffrent ports. <br/>
            With only one CLI command and zero config, the whole backend will run smoothly with Docker!
          </p></div>
          </ScrollableAnchor><br/><br/>
           <ScrollableAnchor id={'heroku'}>
            <div ><h2> Heroku </h2>
            <p className="pAbout"> Unlike the dev-mode that mentioned in previous anchor, this deployed version of the client-side refers to heroku domain server-side. <br/>
            Heroku services runnig the node server, and heroku add-ons feturing the databases. <br/>
            By default, Heroku cooperating with GitHub pages, and with few git commands in the CLI, both server and client-side were born.  </p>
             </div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'styling'}>
          <div><h2 className="h2About">Styling</h2><p className="pAbout">
            Styling react projects is having the abillity to find templates componets online, and topping with your own css cheat-sheet above.<br/>
            That way, without wasting the most needed resource called "time", a full stylishd, responsive and interactive app can be established.<br/>
            In this app there is usuage in tachyons componets, reactstrap libary (the bootstarp 4 react version), Tilt, and some self-improvizing above, including the most modern tools in css such flexboxs, google-fonts, linear-background and more.
          </p></div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'lighthouse'}>
          <div><h2 className="h2About">LightHouse</h2><p className="pAbout">
            With check-list such if the website responsive offline, use of HTTPS and if it optimized for search engines, <br/>
            this great chrome extension helps to determniate up to what degree of 2019 standarts this website complies. <br/>
            With 100% in 'SEO', 100% in 'Best Practices' and 100% in 'Accessibility', this full Progresive Web App really made it in this test!
          </p></div>
          </ScrollableAnchor>
          </Scroll>
          </div>
          </div>
  
  <AboutFooter />
      </div>)
}

export default About