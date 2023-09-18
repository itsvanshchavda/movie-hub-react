


// apiUtils.js





// const  = async () => {
//     const apiKey = 'da9940520e054d33e7104f90fdf4829f';
//     const data = await response.json();
//     return data.results;
// };

// // export const hollywoodAPI = async () => {
// //     const apiKey = 'da9940520e054d33e7104f90fdf4829f';
// //     const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key==${apiKey}`);
// //     const data = await response.json();
// //     return data.results;
// // };



export const hollywoodAPI = async () => {
    try {
        const apiKey = 'da9940520e054d33e7104f90fdf4829f';
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`);
        const data = await response.json();
        console.log(data);
        return data.results;
    } catch (error) {
        console.error('Error fetching Hollywood data:', error);
        throw error;
    }
};


export const tvShowsAPI = async () => {
    try {
        const apiKey = 'da9940520e054d33e7104f90fdf4829f';
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching Hollywood data:', error);
        throw error;
    }
};

// Add more functions for other categories


