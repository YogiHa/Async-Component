import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Scroll from '../../components/Scroll'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './SmartBrain.css';

 const sectionStyle = {
  padding: "0%",
  position: "fixed",
  left: "0",
  bottom: "0%",
  height: "85%",
  width: "100%",
  overflowY: "auto",
  overflowX: "hidden",
  overflow: "hidden"
};

const phantomStyle = {
  display: "fixed",
  padding: "0%",
  height: "85%",
  width: "100%",
  overflowY: "auto",
  overflowX: "hidden"
};

const initialState = {
  input: '',
  imageUrl: '',
  boxes: []
   
}

class SmartBrain extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  calculateFaceLocation = (data) => {
   return data.outputs[0].data.regions.map(face => {
    const clarifaiFace = face.region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
          return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
   
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
     }

  onButtonSubmit = () => {
      this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3001/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json',
        'Authorization' : window.sessionStorage.getItem('token')},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          console.log(response)
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json',
          'Authorization' : window.sessionStorage.getItem('token')},
            body: JSON.stringify({
              id: this.props.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.props.user, { entries: count}))
            })
            .catch(console.log())

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log('api call wasnt sucssesfull'));
  }
  
  render() {
    const {  imageUrl,  boxes } = this.state;
    return (
      <div className="App SmartBrain" style = {phantomStyle}>
      <div style= {sectionStyle}>
      <Scroll>
             <div>
              <Logo />
               <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
                 <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>
          <div className="note"> <br/> <br/><br/> Due to Clarifai services, this feuatue handels only JPEG photos. </div>
      </Scroll>
      </div>
      </div>
    );
  }
}

export default SmartBrain;
