import React from 'react'
import data from './Datas';

const Cards = () => {
    return (
        <>
            <div className='cards'>
                {data.map((item) => (
                    <>
                        <div className='all_cards' >
                            <div className='cards_img'  >
                                <img key={item.id} src={item.image} className='a_images' />
                            </div>
                            <div className='cards_name'>
                                <h2> {item.name} </h2>
                            </div>
                            <div>
                                <button className='cards_play'> {item.play} </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Cards
