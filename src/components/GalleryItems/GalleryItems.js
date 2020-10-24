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
                className="imgs card-img-top"
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
                <div className="card">
                        {this.renderItemOrDesc()}
                    <div className="card-body">
                        <p className="card-text">{this.props.img.likes} likes</p>
                        <button className="btn btn-outline-primary" onClick={() => this.props.like(this.props.img.id)}>Like</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryItems;