import React from 'react';

const HomeComponent = (props) => {
    return (
        <>
            <h1 className="title">On mange où Goeffrey ? </h1>
            <button className="enter-button" onClick={props.enterClick}>
                Entrer
            </button>
        </>
    );
};

export default HomeComponent;