// Cardlist.jsx

import React from 'react';
import Movielist from './Movielist';

const Cardlist = () => {
    return (
        <div>
            {/* Latest Trending */}
            <Movielist title="Latest and trending" apiURL="https://api.themoviedb.org/3/trending/tv/day" />

            {/* Bollywood */}
            <Movielist title="Bollywood Movies" apiURL="https://api.themoviedb.org/3/trending/movie/day" />

            {/* Hollywood */}
            <Movielist title="Hollywood" apiURL="https://api.themoviedb.org/2/trending/tv/day" />

            {/* Web Series */}
            <Movielist title="Web Series" apiURL="WEB_SERIES_API_URL" />

            {/* Tv Shows */}
            <Movielist title="Tv Shows" apiURL="TV_SHOWS_API_URL" />
        </div>
    );
}

export default Cardlist;
