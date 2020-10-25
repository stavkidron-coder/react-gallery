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

    render() {
        return(
            <div className="card">
                {this.renderItemOrDesc()}
                <div className="card-body">
                    <p className="card-text">
                        {this.props.img.likes} likes
                    </p>
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