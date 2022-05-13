import React from "react";

const Animal = ({ animal, fetchAnimal, showDetails }) => {

    const handleClick = () => {
        showDetails(animal);
    };

    return (
        <>
        <h4>Click on the animal's name for more information about them.</h4>
        <div className="animal-box">
            <img className="animal-img" src={animal.image_link} alt="A random zoo animal"/>
            <h3 id="name" onClick={handleClick}>{animal.name}</h3>
            <button id="rdm-btn" onClick={fetchAnimal}>Gimme another random zoo animal!</button>
        </div>
        </>
    );
};

export default Animal;