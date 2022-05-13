import React from "react";

const AnimalDetail = ({selected}) => {

    return (
        <div className="animal-detail">
            <h4>{selected.name} ({selected.animal_type})</h4>
            <h5><u>Latin Name</u>: {selected.latin_name}</h5>
            <p>
                <u>Native habitat</u>: {selected.habitat} in {selected.geo_range} <br/>
                <u>Active time</u>: {selected.active_time} <br/>
                <u>Diet</u>: {selected.diet} <br/>
                <u>Weight</u>: between {selected.weight_min} and {selected.weight_max} lbs <br/>
                <u>Length</u>: between {selected.length_min} and {selected.length_max} ft <br/>
                <u>Lifespan</u>: {selected.lifespan} years <br/>
            </p>
        </div>
    );
};

export default AnimalDetail;