import React, {Component} from 'react';

import {connect} from "react-redux"

class StreamDelete extends Component {



    render() {

        return (
            <div>
                StreamDelete


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {auth_state: state.auth_state}
}

export default connect(mapStateToProps)(StreamDelete);
