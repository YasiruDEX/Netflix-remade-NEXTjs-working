import React, { useEffect } from 'react';
import './Row.css';
import axios from './axios';
import { useDispatch } from 'react-redux';
import { add } from './features/movieSlice';
import { useNavigate } from 'react-router-dom';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const shuffledMovies = shuffleArray(request.data.results);
            setMovies(shuffledMovies);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const switchToMovie = (movie) => {
        console.log(movie);
        dispatch(add(movie));
        navigate('/movie');
    };

    // Fisher-Yates Shuffle algorithm
    function shuffleArray(array) {
        const shuffledArray = array.slice(); // Create a copy of the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {movies.map(
                    (movie) => 
                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && (
                    <div className='row__bucket' onClick={() => switchToMovie(movie)} key={movie.id}>
                        <img 
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                        <div className='row--fadebottom' />
                        <h4 className='row__title'>{movie?.title || movie?.name || movie?.original_name}</h4>
                    </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Row;
