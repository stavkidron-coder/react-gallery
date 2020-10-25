import React, {Component} from 'react';

class Title extends Component {

    render(){
        return(
            <div className="title">
                <h4 className="titleText">My Gallery: <button className="addBtn btn btn-outline-success">Add Photo</button></h4>
                <hr/>
            </div>
        )
    }
}

export default Title;