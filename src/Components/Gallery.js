import React, { Component } from 'react';
import {
  Route,
  BrowserRouter
} from 'react-router-dom'
import Photo from './Photo'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import axios from 'axios'
import apiKey from './Config'
import '../CSS/Gallery.css'


class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    let res = axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=forest&per_page=24&format=json&nojsoncallback=1`)
    .then(response => this.setState({
     photos: response.data.photos.photo
    }))
  }

  render() {
    let photos = this.state.photos.map((item, index) => {
      let farm = item.farm;
      let server = item.server;
      let id = item.id;
      let secret = item.secret;
      let title = item.title;
      return <Photo key={id} farm={farm} server={server} id={id} secret={secret} title={title}/> 
    })
    return (
      <BrowserRouter>
        <div className="Gallery">
          <div className="Gallery-search">
            <SearchBar />
          </div>
          <div className="Gallery-nav">
            <NavBar />
          </div>
          <ul>
            {photos}
          </ul>
        </div>
      </BrowserRouter>
    )
  }
}

export default Gallery