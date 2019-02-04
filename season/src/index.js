import React, {Component} from 'react';
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Speanner from "./Spinner"

class Index extends Component {

    state = {
        latitude: null,
        longitude: null,
        month: null,
        error: null
    };

    componentDidMount() {
        console.log("componentDidMount");
        this.getLocation();
        this.getDate();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    getDate() {
        var now = new Date();
        this.setState({month: now.getMonth()});
    }

    getLocation() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
            },

            err => {
                console.log(err);
                this.setState({error: err.message});
            });
    }

    renderContent() {
        if (this.state.error && !this.state.latitude) {
            return <div> Error: {this.state.error} </div>
        }


        else if (!this.state.error && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}
                                  month={this.state.month}/>
        }


        return (
            <Speanner message={"Please, allow us reach your location ..."}/>);
    }

    render() {
        return (
            <div className={"border red"}>
                {this.renderContent()}
            </div>
        );
    }
}


ReactDOM.render(
    <Index/>,
    document.querySelector("#root")
);