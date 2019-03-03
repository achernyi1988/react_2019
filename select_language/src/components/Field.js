import React, {Component} from 'react';
import {connect} from "react-redux";


class Field extends Component {



    render() {
        return (
            <div>
                <div className="ui input">
                    <input type="text" placeholder={this.props.text}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {text: state.language_text.field}
}

export default connect(mapStateToProps)(Field);

