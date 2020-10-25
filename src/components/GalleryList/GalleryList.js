import React, {Component} from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

class GalleryList extends Component {

    render(){
        return(
            <div>
                {this.props.imgs.map((img) => {
                    return <GalleryItems
                        img={img}
                        key={img.id}
                        like={this.props.like}
                        delete={this.props.delete}
                        />
                })}
            </div>
        )
    }
}

export default GalleryList;