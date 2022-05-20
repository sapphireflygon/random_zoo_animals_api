import React, { useState } from 'react';
import Modal from 'react-modal'
import Animal from '../components/Animal';
import AnimalDetail from '../components/AnimalDetail';

const AnimalContainer = () => {
    const [animal, setAnimal] = useState("");
    const [selected, setSelected] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showDetails = (animal) => {
        setSelected(animal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelected("");
        setIsModalOpen(false);
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
            { animal ? <h4>Click on the animal's name to learn more about them!</h4> : null}
            <div className='flex-container'>
                <div className='flex-child'>
                    { animal
                        ?
                            <Animal id="animal" animal={animal} showDetails={showDetails} fetchAnimal={fetchAnimal}/>
                        
                        : 
                            <div className='on-load'>
                                <h3>Click the button to see an animal</h3>
                                <button id="og-btn" onClick={fetchAnimal}>Enter the zoo!</button>
                            </div>
                    }
                </div>

                { selected && selected === animal
                    ? 
                    <Modal
                        className="modal-flex"
                        isOpen={isModalOpen}
                        ariaHideApp={false}
                        contentLabel="Animal details"
                        style={{
                            overlay: {
                                position: 'fixed'
                            },
                            content: {
                                top: '7%',
                                left: '7%',
                                right: '7%',
                                bottom: '7%',
                                WebkitOverflowScrolling: 'touch',
                            }
                        }}  
                    >
                        <AnimalDetail id="deets" selected={selected} closeModal={closeModal}/>
                    </Modal>
                    
                    :
                    null
                }
            </div>
        </>
    );
};

export default AnimalContainer;