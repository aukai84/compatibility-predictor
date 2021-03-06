import React, {Component} from 'react';

export default class PersonForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            javascript: '',
            python: '',
            java: '',
            ruby: ''
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
        let person = {
            name: this.state.name,
            attributes: {
                javascript: this.state.javascript,
                python: this.state.python,
                java: this.state.java,
                ruby: this.state.ruby
            }
        }
        this.props.addPerson(person)
    }

    render(){
        console.log('state', this.state)
        return(
            <div className="member-form">
                <form type="application/json" onSubmit={this.handleSubmit}>
                    <p>Name</p>
                    <input type="text" name="name" onChange={this.handleInput}/>
                    <p>Attributes <i>*proficiency score between 0-10*</i></p>
                    <label>javascript: </label><input type="number" name="javascript" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>python: </label><input type="number" name="python" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>java: </label><input type="number" name="java" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <label>ruby: </label><input type="number" name="ruby" min={0} max={10} onChange={this.handleInput}/><br></br>
                    <input type="submit" value="Add Member"/>
                </form>
            </div>
        )
    }
}
