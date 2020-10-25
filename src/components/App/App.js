import Axios from 'axios';
import React, { Component } from 'react';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Gallery from '../Gallery/Gallery';
import Form from'../Form/Form';
import './App.css';

class App extends Component {

  state = {
    galleryItems: [],
    image: {
      path: '',
      description: ''
    }
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
        galleryItems: response.data
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

  handleChange = (event, typeParam) => {
    console.log(event.target.value, typeParam);
    
    this.setState({
      image: {
        ...this.state.image,
        [typeParam]: event.target.value
      }
    });
  }

  submitImage = () => {
    console.log("Submit clicked", this.state.image);
    //conditional: all fields must be filled
    if(this.state.image.path === '' || this.state.image.description === ''){
      alert('Fill in all fields!');
      return;
    } else{
      // post new image and description
      Axios({
        method: 'POST',
        url: '/gallery',
        data: this.state.image
      }).then((response) => {
        console.log('POST successful', response);
        this.getPics();
      }).catch((error) => {
        console.log('ERROR in POST:', error);
      });
    } //end else
  } // end submitImage

  render() {
    return (
      <div className="App">

        <Header/>

        <div className="container body">

          <Form submitImage={this.submitImage} handleChange={this.handleChange} image={this.state.image}/>

          <Title/>

          <Gallery galleryItems={this.state.galleryItems} like={this.likeButton}/>

        </div>

      </div>
    );
  }
}

export default App;