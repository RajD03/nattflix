import React from 'react'
// import img from './Vector (2).jpg';

const Navigation = () => {
    return (
        <>
            <div className='main_heading'>
                <h1 className='heading'> Top Netflix Series </h1>
                <div className='search_container'>
                    {/* <a> <img src={img} /> </a> */}
                    <input className='input_search' placeholder='Enter web series name'></input>
                    <button className='search'>Search</button>
                </div>
            </div>
        </>
    )
}

export default Navigation
