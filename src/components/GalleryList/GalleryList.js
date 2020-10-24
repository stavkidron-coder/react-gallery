import React, {Component} from 'react';

class GalleryList extends Component {

    render(){
        return(
           <div>
            {this.props.imgs.map((img) => {
                return <img key={img.id} className="imgs" src={img.path} alt=""></img>
              })}
            </div>
        )

    }

}

export default GalleryList;