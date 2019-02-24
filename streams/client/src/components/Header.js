import React, {Component} from 'react';
import {Link} from "react-router-dom"
import GoogleAPI from "./api/GoogleAPI"

class Header extends Component {
    render() {
        return (
            <div className={"ui secondary   pointing menu"}>
                <Link className={"item"} to={"/"}> Streamy </Link>
                <div className={"right menu"}>
                    <Link className={"item"} to={"/"}> All Streams </Link>
                </div>
                <GoogleAPI/>
            </div>
        );
    }
}

export default Header;
