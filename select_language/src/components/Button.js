import React, {Component} from 'react';
import {connect} from "react-redux"

class Button extends Component {
    render() {

        return (
            <div  >
                <button className={"ui  button"}> {this.props.text} </button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {text: state.language_text.button}
}

export default connect(mapStateToProps)(Button);
