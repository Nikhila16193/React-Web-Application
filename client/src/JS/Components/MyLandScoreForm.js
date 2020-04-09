import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../../CSS/myLandScoreForm.css'

//trouble getting search 'widget' to load

export const ScoreInputList = (
    class ScoreInputList extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                address: '',
                shapeoftract: '',
                sizeoftract: '',
                floodimpact: '',
                zoining: '',
                accesstotract: '',
                topography: '',
                wateravailability: '',
                seweravailability: '',
                proximitytomajorhighways: '',
                transportationplan: '',
                utilitytransmissionlines: '',
                schooldistrict: '',
                proximitytoelemiddleschool: '',
                proximitytohighschool: '',
                sellermotivation: '',
                capitalimprovementbudget: '',
            };

        }

        handleInputChange = e => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        };


        handleSubmit = e => {
            e.preventDefault();


            var { address, shapeoftract,
                sizeoftract,
                floodimpact,
                zoining,
                accesstotract,
                topography,
                wateravailability,
                seweravailability,
                proximitytomajorhighways,
                transportationplan,
                utilitytransmissionlines,
                schooldistrict,
                proximitytoelemiddleschool,
                proximitytohighschool,
                sellermotivation,
                capitalimprovementbudget, } = this.state;

            address = this.props.address;

            const LandScoreForm = {
                address: this.props.address,
                shapeoftract,
                sizeoftract,
                floodimpact,
                zoining,
                accesstotract,
                topography,
                wateravailability,
                seweravailability,
                proximitytomajorhighways,
                transportationplan,
                utilitytransmissionlines,
                schooldistrict,
                proximitytoelemiddleschool,
                proximitytohighschool,
                sellermotivation,
                capitalimprovementbudget,
            };
            debugger;
            axios
                .post('http://localhost:5000/landscores', LandScoreForm, {
                    params: {
                        address,
                        shapeoftract,
                        sizeoftract,
                        floodimpact,
                        zoining,
                        accesstotract,
                        topography,
                        wateravailability,
                        seweravailability,
                        proximitytomajorhighways,
                        transportationplan,
                        utilitytransmissionlines,
                        schooldistrict,
                        proximitytoelemiddleschool,
                        proximitytohighschool,
                        sellermotivation,
                        capitalimprovementbudget,
                    }
                })
                .then(() => console.log('Land Score Entered'))
                .catch(err => {
                    console.error(address);
                    console.error(err);
                });
        };
        render() {
            return (
                <div>

                    <form onSubmit={this.handleSubmit} >
                        <ul>
                            <label htmlFor="name">Your Name </label>
                            <br />
                            <input type="text" id="name" name="name" />
                            <br />
                            <label htmlFor="address">Address to Score </label>
                            <br />

                            <input type="text" id="address" className="form-control" name="address" onChange={this.handleInputChange} value={this.props.address} />
                            <br />
                            <br />

                            <label htmlFor="shapeoftract" className="scoreLabel">Shape of Tract</label>
                            <select id="shapeoftract" name="shapeoftract" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="sizeoftract" className="scoreLabel">Size of Tract</label>
                            <select id="sizeoftract" name="sizeoftract" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="floodimpact" className="scoreLabel">Flood Impact</label>
                            <select id="floodimpact" name="floodimpact" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="zoining" className="scoreLabel">Zoning and Land Use Restrictions</label>
                            <select id="zoining" name="zoining" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="accesstotract" className="scoreLabel">Access To Tract</label>
                            <select id="accesstotract" name="accesstotract" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="topography" className="scoreLabel">Topography</label>
                            <select id="topography" name="topography" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="wateravailability" className="scoreLabel">Water Availability</label>
                            <select id="wateravailability" name="wateravailability" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="seweravailability" className="scoreLabel">Sewer Availability</label>
                            <select id="seweravailability" name="seweravailability" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="proximitytomajorhighways" className="scoreLabel">Proximity to Major Highways</label>
                            <select id="proximitytomajorhighways" name="proximitytomajorhighways" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                          
                            <label htmlFor="transportationplan" className="scoreLabel">Transportation Plan</label>
                            <select id="transportationplan" name="transportationplan" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="utilitytransmissionlines" className="scoreLabel">Utility Transmission Lines</label>
                            <select id="utilitytransmissionlines" name="utilitytransmissionlines" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="schooldistrict" className="scoreLabel">School District</label>
                            <select id="schooldistrict" name="schooldistrict" className="scoreSelect" onChange={this.handleInputChange} >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="proximitytoelemiddleschool" className="scoreLabel"> Proximity to Elementary or Middle School</label>
                            <select id="proximitytoelemiddleschool" name="proximitytoelemiddleschool" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />

                            <label htmlFor="proximitytohighschool" className="scoreLabel">Proximity to High School</label>
                            <select id="proximitytohighschool" name="proximitytohighschool" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="sellermotivation" className="scoreLabel"> Seller Motivation </label>
                            <select id="sellermotivation" name="sellermotivation" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />


                            <label htmlFor="capitalimprovementbudget" className="scoreLabel">Capital Improvement Budget</label>
                            <select id="capitalimprovementbudget" name="capitalimprovementbudget" className="scoreSelect" onChange={this.handleInputChange}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br />
                            <br />




                            <input type="submit" className="scoreInput" />

                        </ul>
                    </form>
                </div>
            );
        }
    }
);

