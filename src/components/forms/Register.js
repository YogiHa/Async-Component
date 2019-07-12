import React from 'react';
import './Forms.css';

 const  MsgError = () =>  (
  <div>
  <span>
invalid regisrertion
  </span>
  </div>);

 const Loading = () => (
  <div>
  <img src={require('./loading.svg') } />
  </div>
)

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      isHide: true,
      isLoading: false
    }
  }

  setIsHide = boolean => {
  this.setState({isHide: boolean})
  }

  setIsLoading = boolean => {
  this.setState({isLoading: boolean})
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

   onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  saveAuthToken = (token) => {
    window.sessionStorage.setItem('token' , token)
  }

  onSubmitRegister = () => {
    this.setIsLoading(true);
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
     .then(data => {
          if (data.sucsess==="true") {
          this.setIsLoading(false);
          this.saveAuthToken(data.token)
          this.props.fetchBackend(data.token)
        } else {
          this.setIsLoading(false);
          this.setIsHide(false)}
      })
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <form autoComplete="off" id="sign_up" className="ba b--transparent ph0 mh0">
              <h3 className="f1 fw6 ph0 mh0">Register</h3>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                aria-label= 'type name here'
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                aria-label= 'type email here'
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                  type="email"
                  name="email-address"
                  id="email_address"
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
                onClick={()=>{this.setIsHide(true); this.onSubmitRegister()}}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                id="register"
              />
            </div>
           {this.state.isLoading &&<Loading />}
           {!this.state.isHide && <MsgError/>}
          </div>
        </main>
      </article>
    );
  }
}

export default Register;