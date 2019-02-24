import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import index from "../../reducers";

class StreamCreate extends Component {



    renderError=({error, touched})=> {
        console.log("renderError");
        if(error && touched){

            return (
                <div className={"ui message error"}>
                    <div className={"header"}> {error} </div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {

        const className = `field ${(formProps.meta.touched && formProps.meta.error) ? "error" : "" }`;
        console.log("formProps = ", formProps.input);

        return (
            <div className={className}>
                <label> {formProps.label} </label>
                <input
                    {...formProps.input}

                />
                {this.renderError(formProps.meta)}
            </div>
        )
    }

    onSubmit = (formValue) => {
        console.log("onSubmit ", formValue);
    }

    render() {
        console.log("StreamCreate::render = ", this.props.handleSubmit);

        return (

            <form className={"ui form error"} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div>
                    <Field name="title" component={this.renderInput} type="text" label="Enter Title"/>
                    <Field name="description" component={this.renderInput} type="text" label="Enter Description"/>
                </div>

                <button className={"ui button primary"} type="submit">Submit</button>
            </form>

        );
    }
}

const validate = (values) => {
    const errors = {}

    if(!values.title){
        errors.title = "you must enter a title";
    }
    else if(values.title.length > 15){
        console.log("must be 15 characters or less")
        errors.title = "must be 15 characters or less"
    }
    return errors;

}

export default reduxForm({form: "createStream", validate})(StreamCreate);
