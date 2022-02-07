import React from 'react'
import { Filter, Card } from "../components"
import "./pages.css"

const Home = () => {
    return (
        <div className='e__home'>
            <div className='filter'>
                <Filter />
            </div>
            <div className='card'>
                <Card />
            </div>
        </div>
    )
}

export default Home