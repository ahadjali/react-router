import { Link } from 'react-router-dom';
import StarRating from "./StarRating";
import "./MovieItem.css";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, /*Button*/
} from 'reactstrap';

const MovieItem = ({ movies }) => {
    return (
        <Card className="cart">
            <Link to ={`/description/${movies.id}`}>
                <CardImg top src={movies.image} alt="Card image cap" />
            </Link>
            <CardBody className="cart-body">
                <CardTitle tag="h5">{movies.title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{movies.year}</CardSubtitle>
                <StarRating rating={+movies.rating} />
                <CardText>{movies.prise}</CardText>
            </CardBody>
        </Card>

    );
};
export default MovieItem;

  //<Button style={{fontSize : "30px"}}><MdAddShoppingCart /></Button>