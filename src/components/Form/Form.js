import React, {Component} from 'react';

class Form extends Component{


    render(){
        return(
            <form>
                <h3 id="formH3">Add a new image:</h3>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Path:</span>
                        </div>
                        <input
                            id="pathInput"
                            className="form-control"
                            type="text"
                            placeholder="Enter image url/path"
                            onChange={(event) => this.props.handleChange(event, 'path')}
                            />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Description:</span>
                        </div>
                        <input
                            id="descriptionInput"
                            className="form-control"
                            type="text"
                            placeholder="Enter image description"
                            onChange={(event) => this.props.handleChange(event, 'description')}
                            />
                    </div>
                
                    <button
                        className="addBtn btn btn-outline-success"
                        onClick={() => this.props.submitImage()}
                        >
                        Add Photo
                    </button>
            </form>
        )
    }
}

export default Form;