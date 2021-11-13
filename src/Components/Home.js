import AddMovie from "./AddMovie"
import MovieList from "./MovieList"
import SearchMovie from "./SearchMovie"

const Home = ({
    searchMovieByName,
    searchMovieByRating,
    searchRating,
    searchMovie,
    movies,
    addNewMovie
}) => {
    return (
        <>
            <SearchMovie searchMovieByName={searchMovieByName} searchMovieByRating={searchMovieByRating} searchRating={searchRating} />
            <MovieList movies={movies.filter(el =>
                el.title.toUpperCase().includes(searchMovie.toUpperCase().trim()) &&
                el.rating >= searchRating)}
            />
            <AddMovie addNewMovie={addNewMovie} />
        </>
    )
}
export default Home;