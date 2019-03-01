import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class StreamForm extends Component {

    renderError=({error, touched})=> {

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

    onSubmit  = async (formValue) => {
        console.log("StreamForm:onSubmit",formValue );
        this.props.onSubmit(formValue);
    }

    render() {
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
    else if(values.title.length > 20){
        errors.title = "must be 20 characters or less"
    }

    if(!values.description){
        errors.description = "you must enter a description";
    }
    else if(values.description.length > 50){
        errors.description = "must be 50 characters or less"
    }

    return errors;

}

export default  reduxForm({form: "StreamForm", validate})(StreamForm);




