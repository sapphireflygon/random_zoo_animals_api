import React from "react";

const Animal = ({ animal, fetchAnimal, showDetails }) => {

    const handleClick = () => {
        showDetails(animal);
    };

    return (
        <>
        
        <div className="animal-box">
            <h3 id="name" onClick={handleClick}>{animal.name}</h3>
            <img className="animal-img" src={animal.image_link} alt="A random zoo animal"/>
            <br/>
            <button id="rdm-btn" onClick={fetchAnimal}>Gimme another one!</button>
        </div>
        </>
    );
};

export default Animal;