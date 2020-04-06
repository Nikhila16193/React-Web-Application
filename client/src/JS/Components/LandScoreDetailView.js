import React from "react";
const axios = require('axios')

export const ScoreInputList = (
    class ScoreInputList extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                landscores: {}

            };
        }

        getLandScores = () => {
            try {
                //return axios.get('http://localhost:5000/getalllandscores/');
                this.setState({
                    landscores: axios.get('http://localhost:5000/getalllandscores/')
                });
                debugger;
                console.log(this.state.landscore);
            } catch (error) {
                console.error(error)
            }
        }

        displayLandscores = async () => {
            debugger;
            const landscores = this.getLandScores
                .then(response => {
                    if (response.data.message) {
                        console.log(
                            `Got ${Object.entries(response.data.message).length} breeds`
                        )
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            console.log(landscores);
        }


//var landscores = this.getLandScores();

render() {
    return (
        <div onLoad={this.getLandScores}>

            {/* displayLandscores(); */}
            <h1> I am working  </h1>
        </div>
    );
}

    }
)