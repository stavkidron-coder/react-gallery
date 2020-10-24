import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
            <header className="jumbotron">
                <div className="container">
                    <h1>React Image Gallery</h1>
                    <h3>Click on a picture to read a description</h3>
                </div>
            </header>
        )
    }
}

export default Header;