import React from "react"

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


export default UserHeader;