import React, { Component } from 'react';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './SmartBrain.css';


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
      fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.props.user.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.props.user.user, { entries: count}))
            })
            .catch(console.log('count went wrong'))

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log('api call wasnt sucssesfull'));
  }

  
  render() {
    const {  imageUrl,  boxes } = this.state;
    return (
      <div className="App1">
             <div>
              <Logo />
               <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
                 <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
            </div>
         
      </div>
    );
  }
}

export default SmartBrain;
