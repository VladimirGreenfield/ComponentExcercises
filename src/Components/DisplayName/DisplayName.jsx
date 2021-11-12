import React from 'react';
import App from '../App';


const DisplayName = (props) => {
    return(
        <h1>{props.firstName}{props.lastName}</h1>
    );
}


export default DisplayName;