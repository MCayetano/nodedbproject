import React from 'react';

function List(props) {
    const {id, make, model, year, description, price} = this.state
    return (
        <div>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}


export default List