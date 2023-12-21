import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
    return (
        <>
            <div className='main_footer' >
                <h1>Follow Us!</h1>
                <FacebookIcon className='facebook' />
                <InstagramIcon className='insta' />
            </div>
        </>
    )
}

export default Footer
