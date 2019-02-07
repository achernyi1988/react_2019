import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        value: ""
    }

    onFromSubmit = event => {
        event.preventDefault();

        console.log(this.state.value);

        this.props.onRequestSearching(this.state.value);
    }
    render() {
        return (
            <div className={"ui segment"}>
                <form className={"ui form"} onSubmit={this.onFromSubmit}>
                    <label> Image Search</label>
                    <input
                        value={this.state.value}
                        type="text"
                        placeholder="Search..."
                        onChange={e => this.setState({value: e.target.value})}/>
                     <button className="ui button">Search</button>
                </form>
            </div>
        );
    }
}


export default SearchBar;