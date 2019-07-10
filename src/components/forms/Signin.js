import React from 'react';
import './Forms.css';

const  MsgError = () =>  (
  <div>
  <span>
invalid user
  </span>
  </div>);

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      isHide: true
    }
  }
  setIsHide = boolean => {
  this.setState({isHide: boolean})
  }

  saveAuthToken = (token) => {
    window.sessionStorage.setItem('token' , token)
  }

  
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
          if (data.sucsess==="true") {
          this.saveAuthToken(data.token)
          this.props.fetchBackend(data.token)
        } else (this.setIsHide(false))
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <form autocomplete="off" id="sign_up" className="ba b--transparent ph0 mh0">
              <h3 className="f1 fw6 ph0 mh0">Sign In</h3>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                aria-label= 'type email here'
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                aria-label= 'type secret here'
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </form>
            <div className="">
              <input
                onClick={()=>{this.setIsHide(true); this.onSubmitSignIn()}}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-black"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
            </div>
           {!this.state.isHide && <MsgError/>}
          </div>
        </main>
       </article>
    );
  }
}

export default Signin;