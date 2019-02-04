import "./SeasonDisplay.css"
import React, {Component} from 'react';


const seasonConfig = {
    summer:{
        text:"Let's hit the beach!",
        iconName:"sun"
    },
    winter:{
        text:"Burr,it's chilly!",
        iconName:"snowflake"
    }
}

class SeasonDisplay extends Component {

    state = {
        season: null
    }


    getSeason(latitude, month) {
        if (month >= 3 && month <= 8) {
            return latitude > 0 ? "summer" : "winter";
        }
        else {
            return latitude > 0 ? "winter" : "summer";
        }
    }

    componentDidMount() {
        console.log(`latitude = ${this.props.latitude} month ${this.props.month}`);
        this.setState({season: this.getSeason(this.props.latitude, this.props.month)});
    }

    render() {
        if(!this.state.season){return <div></div>;}
        const {text, iconName} = seasonConfig[this.state.season];

        return (
                <div className={`season-display ${this.state.season}`}>
                    <i className={`icon-left massive ${iconName} icon`} />
                    <div>{text}</div>
                    <i className={`icon-right massive ${iconName} icon`} />
                </div>

        );
    }
}

export default SeasonDisplay;



