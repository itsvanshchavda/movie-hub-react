
import React, { useState, useEffect } from 'react';
import Movielist from './Movielist';
import { hollywoodAPI } from 'e:/React_Js/movie-hub/src/api-utility.js'; // Import the hollywoodAPI function

const Hollywood = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const hollywoodMovies = await hollywoodAPI();
                setMovies(hollywoodMovies);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Movielist title="Hollywood Movies" movies={movies} />
        </div>
    );
};

export default Hollywood;

