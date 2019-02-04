import React, {Component} from 'react';
import ReactDOM from "react-dom"

class Index extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                latitude: null,
                longitude: null,
                month: null,
                error: null
            };


    }

    componentDidMount() {
        this.getLocation();
        this.getDate();
    }

    getDate() {
        var now = new Date();
        console.log(`current month = ${now.getMonth()}`);
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


    render() {

        if(this.state.error && !this.state.latitude){
            return <div>  Error: {this.state.error} </div>
        }



        else if(!this.state.error && this.state.latitude){
            return <div>Latitude: {this.state.latitude} </div>
        }


        return <div>  Loading ... </div>

        // return (
        //     <div>
        //         <div>
        //             Latitude: {this.state.latitude}
        //         </div>
        //         <div>
        //             Longitude: {this.state.longitude}
        //         </div>
        //         <div>
        //             Date: {this.state.month}
        //         </div>
        //         <div>
        //
        //         </div>
        //     </div>
        // );
    }
}


ReactDOM.render(
    <Index/>,
    document.querySelector("#root")
);