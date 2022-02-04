import React from "react";

const PhoneNumber = props => {
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="text" maxLength="10" pattern="\d{10}" title="Please enter exactly 10 digits" className={formControl} {...props} />
        </div>
    );
  }

export default PhoneNumber;