import './SearchMovie.css'
import StarRating from "./StarRating";

const SearchMovie = ({ searchMovieByName, searchMovieByRating, searchRating }) => {
    return (
        <div className="input-container">
            <input
                type="search"
                placeholder="Searching movie..."
                className="search"
                onChange={searchMovieByName}
            />
            <StarRating rating={searchRating} searchMovieByRating={searchMovieByRating} />
        </div>
    );
};
export default SearchMovie;