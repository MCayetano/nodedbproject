import React from 'react';

function List(props) {
    const {inventory} = props
    return (
        <div>
            <p>{inventory.id}</p>
            <p>{inventory.make}</p>
            <p>{inventory.model}</p>
            <p>{inventory.year}</p>
            <p>{inventory.price}</p>
            <p>{inventory.description}</p>
        </div>
    )
}


export default List