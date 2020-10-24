import Axios from 'axios';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';
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
    Axios({ // get images
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Get Response:', response.data);
      this.setState({
        galleryItems: response.data // push images into the galleryItems array
      });
    }).catch((error) => {
      console.log('Error in GET:', error);
    });
  }

  likeButton = (itemId) => {
    console.log('in PUT:', itemId);
    Axios({
      method: 'PUT',
      url: `/gallery/like/${itemId}`
    }).then((response) => {
      console.log('PUT request successful!', response.data);
      this.getPics();
    }).catch((error) => {
      console.log('ERROR in PUT', error);
    });
  }

  render() {
    return (
      <div className="App">

        <Header/>

        <div className="container body">

          <Title/>

          <Gallery galleryItems={this.state.galleryItems} like={this.likeButton}/>

        </div>

      </div>
    );
  }
}

export default App;