import React from 'react'
import Logo from '../assets/zomato-seeklogo.com.svg'

const Heading = () => {
    return (
        <div className='heading-search'>
            <img src={Logo} alt=" " className='logo-svg' />
            <h2 className='heading-side'>Discover the best food & drinks in Chennai</h2>
            <form className='form'>
                <input type="text" name="search" placeholder="Search.." />
            </form>
        </div>
    )
}

export default Heading
