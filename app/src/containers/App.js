import React, { Component } from 'react';
import './App.css';
import PersonForm from '../components/personForm.js';
import {compatibilityPredictor} from '../modules';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            team: [],
            applicants: [],
            scoredApplicants: [] 
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
        let workplace = {
            team: this.state.team,
            applicants: this.state.applicants
        }
        this.setState({
           scoredApplicants: compatibilityPredictor(workplace) 
        })
    }

    render(){
        return(
            <div className="app">
                <header>
                    <h1>Compatibility Predictor</h1>
                </header>
            <h4>Add current team members and new applicants to the app to see their compatibility score! (higher is better)</h4>
                <div className="container">
                    <div className="input-container">
                        <div className="forms-container">
                            <div className="form-container">
                                <h2>New Team Member</h2>
                                <PersonForm addPerson={this.addTeamMember}/>
                            </div>
                            <div className="form-container">
                                <h2>New Applicant</h2>
                                <PersonForm addPerson={this.addApplicant}/>
                            </div>
                        </div>
                        <div className="person-list-container">
                            <div className="members-container">
                                <h2>Current Team</h2>
                                {this.state.team.map(person => (
                                    <p>{person.name}</p>
                                ))}
                            </div>
                            <div className="members-container">
                                <h2>Current Applicants</h2>
                            {this.state.applicants.map(person => (
                                <p>{person.name}</p>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="score-container">
                        <h3>Click the button below to see if your team is compatible</h3>
                        <button onClick={this.calculateScore}>Calculate Applicants Score</button>
                        {this.state.scoredApplicants.map(applicant => (
                            <div>
                                <p>Name: {applicant.name}</p>
                                <p>Score: {applicant.score}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
