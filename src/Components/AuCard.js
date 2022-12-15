import React from 'react'

const AuCard = ({ element }) => (
    <div class="card-container" style={ {display: 'flex', justifyContent: 'center', textAlign: 'center'} }>
        <div className='card-author'>
            <img className='card-image' src={element.imgPath} alt='author'></img>
            <h1>{element.name}</h1>
            <h2>{element.date}</h2>
            <p>{element.details}</p>
        </div>
    </div>
)

export default AuCard;