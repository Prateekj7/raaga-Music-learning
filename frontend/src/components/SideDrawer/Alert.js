import React from 'react';

const Alert = (props) => {
    return (
       props.alert && <div class="alert alert-danger" role="alert">
   <strong>{props.alert.type}</strong>:{props.alert.msg}
</div>
    );
};

export default Alert;