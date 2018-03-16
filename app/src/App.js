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
        this.calculateScore  = this.calculateScore.bind(this);
        this.addTeamMember = this.addTeamMember.bind(this);
        this.addApplicant = this.addApplicant.bind(this);
    }

    addTeamMember(person){
        this.setState({
            team: this.state.team.concat(person)
        })
    }

    addApplicant(person){
        this.setState({
            applicants: this.state.applicants.concat(person)
        })
    }

    calculateScore(e){
        e.preventDefault();
        console.log('calculate')
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
                        <h2>New Team Member</h2>
                        <PersonForm addPerson={this.addTeamMember}/>
                    </div>
                    <div className="applicant-form-container">
                        <h2>New Applicant</h2>
                        <PersonForm addPerson={this.addApplicant}/>
                    </div>
                </div>
                <button onClick={this.calculateScore}>Calculate Applicants Score</button>
                <div className="person-list-container">
                    <div className="team-members-container">
                        <h2>Current Team</h2>
                        {this.state.team.map(person => (
                            <p>{person.name}</p>
                        ))}
                    </div>
                    <div className="applicants-container">
                        <h2>Current Applicants</h2>
                    {this.state.applicants.map(person => (
                        <p>{person.name}</p>
                    ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
