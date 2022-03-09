import React from 'react';

export default function Alert(props) {
    const capitalize = (word)=>{
       let lcase = word.toLowerCase();
       return lcase.charAt(0).toUpperCase() + lcase.slice(1);
    }
    return (
      props.alert && <div>
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}:</strong> {props.alert.message}.
            </div>
        </div>
    );
}
