import React from "react"
import {connect} from "react-redux"

class UserHeader extends React.Component {

    render(){

        const {user} = this.props;
        if(!user){
            return null;
        }

        return (
            <div className={"header"} style={{ color: "red"}} >{user.name}</div>
        )
    }
}


const mapStateToProps = (state, propsFromUserHeader) => {

    return {user: state.users.find( elem => elem.id === propsFromUserHeader.userId )}
}

export default connect(mapStateToProps) (UserHeader);