import React, {Component} from 'react';

import {connect} from "react-redux"
import Modal from "../Modal"
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions"


class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions = () => {
        return (
            <React.Fragment> {/* Fragment keeps   the nice styling instead of div*/}{/* Fragment is equivalent <> < /> */}
                <button onClick={this.onDismiss} className={"ui button primary"}>Cancel</button>
                <button onClick={this.onTryDelete} className={"ui button negative"}>Delete</button>
            </React.Fragment>
        )
    }

    onTryDelete = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    onDismiss = () => {
        history.push("/")
    }


    render() {

        const {stream} = this.props;
        if (!stream) {
            return <div>Loading...</div>
        }

        return (
            <Modal
                title={"Delete Stream "}
                content={`Are you sure you want to delete ${stream.title} stream?`}
                actions={this.renderActions()}
                onDismiss={this.onDismiss}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
