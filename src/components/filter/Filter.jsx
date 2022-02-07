import React from 'react'
import "./filter.css"

const Filter = () => {
    return (
        <div className='e__filter'>
            <div className='e__filter-container'>
                <form className='filter-form'>
                    <h2>Filter Results</h2>
                    <div><label>Name(contains)</label><br/><input type='text' placeholder='text string' className='form-control' /></div>
                    <div><label>Order By</label><br/>
                    <select className='form-control'>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    </div>
                    <div className='text-right'><button className='btn btn-primary mt-2' type='button'>Clear</button></div>
                </form>
            </div>
        </div>
    )
}

export default Filter

