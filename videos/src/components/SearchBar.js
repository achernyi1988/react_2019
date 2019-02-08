import React from "react"

class SearchBar extends React.Component {

    state = {text: ""}

    onChange = (event) => {
        event.preventDefault();
        this.setState({text: event.target.value});
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchText(this.state.text);
    }

    render() {
        return (
            <div className={"ui segment"}>
                <form className={"ui form"} onSubmit={this.onSubmit}>
                    <label> Search </label>
                    <input
                        value={this.state.text}
                        placeholder={"type ..."}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }

}

export default SearchBar;