import './MovieBanner.css' 
import { useSelector } from 'react-redux'
import { selectMovie } from './features/movieSlice'

function MovieBanner() {
    const movie = useSelector(selectMovie);

    console.log(movie)

    function truncate(str, n) {
        return str;
        // return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

  return (
    <header 
    className='movieBanner' 
    style={{
        // backgroundSize: 'cover',
        // backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        // backgroundPosition: 'center center',
    }}>
        <img 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.name}
            className='movieBanner__poster'
        />

        <div className='movieBanner__contents'>
            <div className="movieBanner--fadeBottom" />
            <div className="movieBanner--blackBottom" />
            <h1 className='movieBanner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {/* <div className='movieBanner__buttons'>
                <button className='movieBanner__button'>Play</button>
            </div> */}
            {playButton({className: 'movieBanner__button'})}
            <h1 className='movieBanner__description'>
                {truncate(movie?.overview, 150)}
            </h1>
        </div>

        <h2 className='movieBanner__description2'> Top Choices for you</h2>

        
    </header>
  )
}

function playButton(props) {

    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 448 512" {...props}>
        <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
    </svg>
    )
}

export default MovieBanner