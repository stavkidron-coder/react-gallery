import React, {Component} from 'react';
import GalleryList from '../GalleryList/GalleryList';

class Gallery extends Component{


    render(){
        return(
            <main>
                <GalleryList imgs={this.props.galleryItems} like={this.props.like}/>
            </main>
        )
        
    }

}

export default Gallery;