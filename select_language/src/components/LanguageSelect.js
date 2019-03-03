import React, {Component} from 'react';
import {selectLanguageAction} from "../actions"
import {connect} from "react-redux"

class LanguageSelect extends Component {

    changeLanguage = (value) => {
        this.props.selectLanguageAction(value);
    }

    componentDidMount(){
        this.props.selectLanguageAction("russian");
    }

    render() {

        return (
            <div className={"ui horizontal list"}>
                <div className="item">
                    {this.props.text}
                </div>
                <div className="item">
                    <i className="us flag" onClick={() => this.changeLanguage("english")}/>
                    <i className="ru flag" onClick={() => this.changeLanguage("russian")}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {text: state.language_text.selectLanguage}
}

export default connect(mapStateToProps, {selectLanguageAction})(LanguageSelect);
