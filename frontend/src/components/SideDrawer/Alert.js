import React from 'react';

const Alert = (props) => {
    return (
       props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
   <strong>{props.alert.type}</strong>:{props.alert.msg}
</div>
    );
};

export default Alert;