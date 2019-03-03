import React, {Component} from 'react';
import UserCreate from "./UserCreate"
import LanguageSelect from "./LanguageSelect"

class App extends Component {
    render() {
        return (
            <div className={"ui container"}>
                <LanguageSelect/>
                <UserCreate/>
            </div>
        );
    }
}

export default App;
