import React from 'react';

const FetchError = ({ message, onRetry }) => {
    <div>
        <p>Could not fetch. {message}</p>
        <button onClick={onRetry}></button>
    </div>

}

export default FetchError;