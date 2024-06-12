import React from 'react'
import './Banner.css'

function Banner() {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

  return (
    <header 
    className='banner' 
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhjukkwcishwdbbo3vp5m.jpeg')`,
        backgroundPosition: 'center center',
    }}>

        <div className='banner__contents'>
            <h1 className='banner__title'>
                Movie Name
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncate('This is a description', 150)}
            </h1>
        </div>

        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner