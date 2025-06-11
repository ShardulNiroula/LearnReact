import popularTitles from '../data/popularTitles.json';

const API_KEY = "9a030df1";
const BASE_URL = "http://www.omdbapi.com/";

export const getPopularMovies = async () => {
    // Fetch details for each popular title
    const promises = popularTitles.map(title =>
        fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}`)
            .then(res => res.json())
    );
    const movies = await Promise.all(promises);
    // Filter out any not found results
    return movies.filter(movie => movie && movie.Response === "True");
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.Search || [];
};

export const getMovieDetails = async (imdbID) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
    const data = await response.json();
    return data;
};
