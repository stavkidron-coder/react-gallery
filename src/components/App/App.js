import Axios from 'axios';
import React, { Component } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {

  state = {
    galleryItems: []
  }

  componentDidMount = () => {
    console.log('App is mounted');
    this.getPics();
  }

  getPics = () => {
    console.log('in getPics');
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Get Response:', response.data); //CONTINUE FROM HERE -- Need to push image data to gallery items array
      this.setState({
        galleryItems: response.data
      });
    }).catch((error) => {
      console.log('Error in GET:'.error);
    });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <main>
        <GalleryList imgs={this.state.galleryItems}/>     
        </main>
      </div>
    );
  }
}

export default App;
