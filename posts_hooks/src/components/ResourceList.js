import React, {Component} from 'react';
import axios from "axios";

class ResourceList extends Component {

    state = {
        data: null
    }

    componentDidMount() {
        console.log("componentDidMount",this.state.data)
        axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
            .then(response => this.setState({data: response.data}))
            .then(json => console.log(json))
    }

    componentDidUpdate(prev) {
        console.log("componentDidUpdate prev", prev);
        console.log("componentDidUpdate this.props.resource ", this.props.resource);
        if(prev.resource !== this.props.resource) {
            axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
                .then(response => this.setState({data: response.data}))
                .then(json => console.log(json))
        }
    }

    renderList() {

        if(!this.state.data)return <div></div>;

        console.log("renderList",this.state.data)
        return this.state.data.map((value) => {
            return (
                <div className="ui item" key={value.id}>
                <li>{value.title}</li>

                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}


export default ResourceList;