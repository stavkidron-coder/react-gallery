import React, {Component} from 'react';

class GalleryItems extends Component {

    state = {
        renderImg: true
    }

    toggleImg = () => {
        this.setState({
            renderImg: !this.state.renderImg
        });
    }

    renderItemOrDesc = () => {
        if(this.state.renderImg){
            return <img
                src={this.props.img.path}
                className="imgs"
                alt={this.props.img.description}
                onClick={this.toggleImg}
            />
        } else {
            return <div onClick={this.toggleImg}>{this.props.img.description}</div>
        }
    }

    render() {
        return(
            <div className="imgWrapper">
                {this.renderItemOrDesc()}
                <button onClick={() => this.props.like(this.props.img.id)}>Like</button>
                <p>{this.props.img.likes} likes</p>
            </div>
        )
    }
}

export default GalleryItems;