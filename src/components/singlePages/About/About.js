import React from 'react';
import AboutFooter from './AboutFooter'
import ScrollableAnchor from 'react-scrollable-anchor';
import './About.css';

function About() {
	return( <div className="App">
    <h1> About </h1><br/><br/>
    <section className="cf w-100 h-45 pa2-ns">
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#react" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
       <img src={require('./logos/react.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
      <h3 className="f5 f4-ns mb0 black-90">React</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#nodejs" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/nodejs.png')} 
        className="s db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
      <h3 className="f5 f4-ns mb0 black-90">Node-js</h3>
     </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#redis" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/redis.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">Redis</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#postgreSQL" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/psql.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">PostgreSQL</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#docker" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/docker.png')} 
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">Docker</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#styling" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/css3.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">Styling</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="#lighthouse" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/lighthouse.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">Lighthouse</h3>
      </a>
    </article>
    <article className="fl w-40 w-30-m  w-25-ns pa2-ns">
     <a href="https://github.com/YogiHa/Async-Component" className="ph2 ph0-ns pb3 link db">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img src={require('./logos/github.png')}
        className="db bg-center cover aspect-ratio--object" alt='logo'/>
      </div>
        <h3 className="f5 f4-ns mb0 black-90">View on github</h3>
      </a>
    </article>
    </section><br/><br/><br/>
     <ScrollableAnchor id={'react'}>
            <div> <h2> React </h2>
            <p>This app was built with React advanced framework. <br/>
             It's main idea is is the "Async-Component", an easy tool to implemaint, with great peroformance scale.
             <br/> In first render-path, the server loads only what's nesseceary for first paint, and only afterwards keeps loading all other files.<br/>
              Another advantage of async-components concept, is it's diverse between states, each component holds it's own state, and a comunication between states is avialble in the App root.
              <br/>In this project there is also usuage of 'react-router' libary, for changig routes between the "about" page and the main app page.  </p> </div>
          </ScrollableAnchor><br/> <br/>
         <ScrollableAnchor id={'nodejs'}>
            <div><h2> Node-JS </h2>
            <p>Using most modern libaries such as express-js for app server, bcrypt, morgan and CORS for security, knex for connecting databases, bodyParser for responding JSON files to the front-end,
            this Node-JS server definitly up to date! </p>
             </div>
          </ScrollableAnchor><br/><br/>
  
           <ScrollableAnchor id={'redis'}>
            <div><h2> Redis </h2>
            <p> Want to go back to the app without login again? <br /> 
            Don't worry, Redis automaticly generate a unique token for you. <br/>
            The token will be stored in the session storage, and will vanish once you log out/close this tab.
            </p>  </div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'postgreSQL'}>
          <div><h2>PostgreSQL</h2>
          <p>This SQL dataBase tool holds users information, such name, email, points and date of joining the app.<br/>
          Using knex in the server to handle the connection to the db, allows easy config, no matter if the issue is adding new user, new atribute, or just updating existing user</p> </div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'docker'}>
          <div><h2> Docker </h2> <p>
            actually, all three elements above were kind of lie.<br/> The reason for that is that those three elements are running together under just one container.<br/>
            With only one bash command and zero config, the whole backend will run smoothly with Docker!
          </p></div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'styling'}>
          <div><h2>Styling</h2><p>
            Styling react projects is having the abillity to find templates componets, and topping with your own css cheat-sheet.<br/>
            In this app there is usuage in tachyons componets, reactstrap libary (the bootstarp 4 react version), and some self-improvizing above, including the most modern tools in css such flexboxs and more.
          </p></div>
          </ScrollableAnchor><br/><br/>
          <ScrollableAnchor id={'lighthouse'}>
          <div><h2>LightHouse</h2><p>
            This great chrome extension helps to determniate up to what degree of 2019 standarts this website complies. <br/>
            With 100% in 'SEO', 100% in 'Best Practices' and 100% in 'Accessibility', this full Progresive Web App really made it in this test!
          </p></div>
          </ScrollableAnchor>
  
  <AboutFooter />
    </div>)
}

export default About