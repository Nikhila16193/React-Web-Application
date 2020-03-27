import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';

//trouble getting search 'widget' to load

export const  ScoreInputList = ( 
    class ScoreInputList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            score0: '',
            score1: '',
            score2: '',
            score3: '',
        };
    }

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };


    handleSubmit = e => {
        e.preventDefault();

        const { address, score0, score1 , score2, score3 }  = this.state;

        // const address = this.state.address;
        // const score0 = this.state.score0;
        // const score1 = this.state.score1;
        // const score2 = this.state.score2;
        // const score3 = this.state.score3;


        // const { bookID, bookTitle, bookAuthor } = this.state;

        const LandScoreForm = {
            address,
            score0,
            score1,
            score2,
            score3
        };
        
        

        debugger;
        axios
            .post('http://localhost:5000/landscores', LandScoreForm , { params: {
                address,
                score0,
                score1,
                score2,
                score3
              }} )
            .then(() => console.log('Land Score Entered'))
            .catch(err => {
                console.error(address);
                console.error(err);
            });
    };
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit} >
                    <ul>
                        <label htmlFor="name">Your Name </label>
                        <br />
                        <input type="text" id="name" name="name" />
                        <br />
                        <label htmlFor="address">Address to Score </label>
                        <br />

                        <input type="text" id="address" className="form-control"  name="address" onChange={this.handleInputChange} />
                        <br />
                        <br />

                        <label htmlFor="score0">Size of Tract</label>
                        <select id="score0" name="score0" onChange={this.handleInputChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="score1">Shape of Tract</label>
                        <select id="score1" name="score1" onChange={this.handleInputChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="score2">Flood Impact</label>
                        <select id="score2" name="score2" onChange={this.handleInputChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <br />

                        <label htmlFor="score3">Zoning and Land Use Restrictions</label>
                        <select id="score3" name="score3" onChange={this.handleInputChange}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <br />

                        <input type="submit" />

                    </ul>
                </form>
            </div>
        );
    }
}
);

