import React from 'react'
import './MovieScreen.css'
import MovieBanner from '../MovieBanner'
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'


function MovieScreen() {
    

  return (
    <div className='movieScreen'>
        <Nav />
       <MovieBanner />

       <div className='movieScreen__spacing'>

       <Row title='Movies For You' fetchUrl={requests.fetchTrending} />
       </div>
    </div>
  )
}

export default MovieScreen