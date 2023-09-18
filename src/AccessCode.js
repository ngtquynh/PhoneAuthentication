import React from "react";
import './AccessCode.css'
const AccessCode = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="text" maxLength="6" pattern="\d{6}" title="Error: 10 digits are required." className={formControl} {...props} />
        </div>
    );
}

export default AccessCode;