import React from 'react'

const Person = (props) => {
    const {img, name, age} = props
    return (
        <div className='person'>
            <img src={img} alt={`${name}-image`} />
            <div>
                <h3>{name}</h3>
                <p>{age} years</p>
            </div>
        </div>
    )
}

export default Person;