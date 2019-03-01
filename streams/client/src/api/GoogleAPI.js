import React from "react"
import { bindActionCreators }           from 'redux'
import *  as authenticationCtreators  from "../actions/index"
import {connect} from "react-redux"
const CLIENT_ID = "947615618876-kp7q6jm7ehfdnbiu1vg3oci5cv0qttla.apps.googleusercontent.com";


class GoogleAPI extends React.Component {



    onSignedInChange = (isSigned) => {
        if(isSigned){
            this.props.actions.auth.trySignIn(this.auth.currentUser.get().getId());

        }else{
            this.props.actions.auth.trySignOut( );
        }

    }

    componentDidMount() {

        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                scope: "email",
                clientId: CLIENT_ID
            })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();

                    this.auth.isSignedIn.listen(this.onSignedInChange);
                    this.onSignedInChange(this.auth.isSignedIn.get());
                    console.log(this.auth.isSignedIn.get());
                })

        });

    }

    signOutClick = () => {
        this.auth.signOut().then((args) => console.log("no error=", args), (error) => console.log("error = ", error))
    }
    signInClick = () => {
        this.auth.signIn().then((args) => console.log("no error=", args), (error) => console.log("error = ", error))
    }

    renderAuthButton = () => {

        const {isSignedIn} = this.props;

        if (isSignedIn == null) {
            return null;
        }
        else if (isSignedIn) {
            return (
                <div>
                    <button
                        onClick={this.signOutClick}
                        className="ui red google button">
                        <i className=" google  icon"/>
                        Sign out
                    </button>
                </div>
            );

        } else {
            return (
                <div>
                    <button
                        onClick={ this.signInClick}
                        className="ui blue google button">
                        <i className=" google  icon"/>
                        Sign In
                    </button>
                </div>
            );
        }
    }

    render() {
        console.log("render , userId =  ", this.props.userId + " isSignedIn = ",  this.props.isSignedIn);
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth_state.isSignedIn,
            userId: state.auth_state.userId};
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            auth: bindActionCreators(authenticationCtreators, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAPI);