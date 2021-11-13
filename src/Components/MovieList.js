import { Row } from "reactstrap";
import MovieItem from "./MovieItem";
import "./MovieList.css";

const MovieList = ({
    movies,
}) => {
    return (
        <div className="todo-list">
            {movies.map((el) => (
                <Row>
                    <MovieItem movies={el} />
                </Row>

            ))}
        </div>
    );
};

export default MovieList;