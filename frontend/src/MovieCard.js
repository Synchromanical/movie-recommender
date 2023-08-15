import React from 'react';

function MovieCard({movie}){
    return (
        <a href={movie.url} className="movie-card">
            <h2> {movie.title}</h2>
            <img src={movie.poster_path} alt={movie.title}/>
            <p>{"Release Date: " + movie.release_date}</p>
            <p>{"Popularity: " + movie.popularity}</p>
            <p>{"Average Vote: " + movie.vote_average}</p>
            <p>{"Vote Count: " + movie.vote_count}</p>
        </a>
    );
}

export default MovieCard;