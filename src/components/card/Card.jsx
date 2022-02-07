import React, { useEffect, useState } from 'react'
import "./card.css"

const Card = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json', { method: 'GET',
        dataType: 'json' }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
        .then(data => {setMovies(data)})
    },[])

    return (
        <div className='e__card'>
            <div class="e__card-box">
                <div class="e__card-box-gradient">
                </div>
                {movies.map(movie => {
                    return(
                        <div class="e__card-box-content">
                            <div>
                            <h2>{movie.name}</h2> 
                            <p>Release date: {movie.first_release_date}</p>
                            <p>{movie.summary}</p>
                            </div>
                            
                        </div>
                       
                        
                    )
                })}  
                <p className="badge badge-warning badge-pill">2</p>
            </div>
        </div>
    )
}

export default Card

