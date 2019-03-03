import React, {Component} from 'react';
import Button from "./Button"
import Field from "./Field"

class UserCreate extends Component {
    render() {
        return (

                <div className={"ui form"}>
                    <div className="three fields">
                        <div className="field">
                            <Field/>
                        </div>
                        <div className="field">
                            <Button/>
                        </div>
                    </div>
                </div>

        );
    }
}

export default UserCreate;
