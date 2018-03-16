import React, { Component } from 'react';
import './App.css';
import PersonForm from './components/personForm.js';
let team = require('./team.json').team;

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: [],
            applicants: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.calculateScore  = this.calculateScore.bind(this);
    }

    calculateScore(){
        console.log('calculating score...')
    }

    handleInput(e){
        e.preventDefault();
        console.log(e.target.name)
    }

    render(){
        return(
            <div className="app">
                <header>
                    <h1>Compatibility Predictor</h1>
                </header>
                <h4>Add current team members and new applicants to the app to see their compatibility score! (higher is better)</h4>
                <div className="form-container">
                    <div className="team-form-container">
                        <PersonForm/>
                    </div>
                    <div className="applicant-form-container">
                        <PersonForm/>
                    </div>
                </div>
                <button onClick={this.calculateScore}>Calculate Applicants Score</button>
            </div>
        )
    }

}

export default App;
