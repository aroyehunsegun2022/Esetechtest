import React from 'react'
import "./card.css"

const Card = ({movies}) => {

    return (
        <div className='e__card'>
        {movies.map(movie => {
                    return(
            <div class="e__card-box">
                <div class="e__card-box-gradient"></div>
                        <div class="e__card-box-content">
                            <h2>{movie.name}</h2> 
                            <p>Release date: {movie.first_release_date}</p>
                            <p>{movie.summary}</p>
                            
                        </div>
                <p className="badge badge-warning badge-pill">2</p>
            </div>
            )
                })} 
        </div>
    )
}

export default Card

