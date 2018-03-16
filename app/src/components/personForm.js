import React, {Component} from 'react';

export default class PersonForm extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addPerson(this.state)
    }

    render(){
        console.log('state', this.state)
        return(
            <div className="member-form">
                <form type="application/json">
                    <p>Name</p>
                    <input type="text" name="name" onChange={this.handleInput}/>
                    <p>Attributes <i>*between 0-10*</i></p>
                    <label>javascript: </label><input type="number" name="javascript" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>python: </label><input type="number" name="python" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>java: </label><input type="number" name="java" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>ruby: </label><input type="number" name="ruby" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <input type="submit" onClick={this.handleSubmit} value="Add Team Member"/>
                </form>
            </div>
        )
    }
}
