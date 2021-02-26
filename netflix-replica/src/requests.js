
const API_KEY ="a61a6486895d3577788ed1e56f8269e7";
const requests ={
 fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
 fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
 fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
 fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
 fetchScific: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
 fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`
}


export default requests;
