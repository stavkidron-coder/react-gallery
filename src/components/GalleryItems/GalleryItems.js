// import Axios from 'axios';
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
            return(
                <img
                    src={this.props.img.path}
                    className="imgs card-img-top fadeIn"
                    alt={this.props.img.description}
                    onClick={this.toggleImg}
                />
            )
        } else {
            return(
                <p
                    className="descriptions card-img-top fadeIn"
                    onClick={this.toggleImg}>
                        {this.props.img.description}
                </p>
            )
        }
    }

    renderLikes = () => {
        if(this.props.img.likes <= 0){
            return(
                <p>No likes yet</p>
            )
        } else{
            return(
                <p className="card-text">
                    {this.props.img.likes} likes
                </p>
            )
        } 
    }

    render() {
        return(
            <div className="card">
                {this.renderItemOrDesc()}
                <div className="card-body">
                    {this.renderLikes()}
                    <button
                        className="likeBtn btn btn-outline-primary"
                        onClick={() => this.props.like(this.props.img.id)}>
                            Like
                    </button>
                    <button
                        className="deleteBtn btn btn-outline-danger"
                        onClick={() => this.props.delete(this.props.img.id)}>
                            Delete
                    </button>
                </div>
            </div>
        )
    }
}

export default GalleryItems;