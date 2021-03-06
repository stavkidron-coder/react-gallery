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
                <div>
                    <p
                        className="descriptions card-img-top fadeIn"
                        id="cardP"
                        onClick={this.toggleImg}>
                            {this.props.img.description}
                    </p>
                </div>
            )
        }
    }

    renderLikes = () => {
        if(this.props.img.likes <= 0){
            return(
                <p className="card-text">
                    No likes yet
                </p>
            )
        } else{
            return(
                <p className="card-text">
                    likes: {this.props.img.likes}
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
                            Like <i class="far fa-thumbs-up"></i>
                    </button>
                    <button
                        className="deleteBtn btn btn-outline-danger"
                        onClick={() => this.props.delete(this.props.img.id)}>
                            Delete <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default GalleryItems;