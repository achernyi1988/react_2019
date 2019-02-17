

import {connect} from "react-redux";

import UserHeader from "./UserHeader"

const mapStateToProps = (state, propsFromUserHeader) => {

    return {user: state.users.find( elem => elem.id === propsFromUserHeader.userId )}
}

export default connect(mapStateToProps) (UserHeader);