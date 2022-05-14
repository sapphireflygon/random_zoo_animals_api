import React, { useState } from 'react';
import Animal from '../components/Animal';
import AnimalDetail from '../components/AnimalDetail';

const AnimalContainer = () => {
    const [animal, setAnimal] = useState("");
    const [selected, setSelected] = useState("");

    const showDetails = (animal) => {
        setSelected(animal);
    };

    const fetchAnimal = () => {
        fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
            .then((result) => result.json())
            .then((animal) => setAnimal(animal))
            .catch((error) => console.error);
    };


    return (
        <>
            <h1 className='title'>Random Zoo Animals</h1>
            <div className='flex-container'>
                { animal
                    ?
                        <div >
                            <Animal id="animal" animal={animal} showDetails={showDetails} fetchAnimal={fetchAnimal}/>
                        </div>
                    : 
                        <div className='on-load'>
                            <h3>Click the button to see an animal</h3>
                            <button id="og-btn" onClick={fetchAnimal}>Enter the zoo!</button>
                        </div>
                }
                { selected && selected === animal
                    ? 
                    <div>
                        <AnimalDetail id="deets" selected={selected} />
                    </div>
                    :
                    null
                }
            </div>
        </>
    );
};

export default AnimalContainer;