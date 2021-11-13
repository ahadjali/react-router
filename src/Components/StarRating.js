import StarRatingComponent from 'react-star-rating-component';
import "./StartRating.css";

const StarRating = ({ rating, searchMovieByRating }) => {
  return (
    <div className="star-rating">
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={num => searchMovieByRating && searchMovieByRating(num)}
      />
    </div>
  );
};

export default StarRating;