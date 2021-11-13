import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Button, Card, CardBody,
    CardTitle, CardText, CardImg
} from "reactstrap";

const Description = ({ movies }) => {

    let { id } = useParams();
    const [letMovie, setLetMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLetMovie(movies.find((el) => el.id === id));
    }, []);

    return (
        <div>
            <Card>
                <CardImg variant="top" src={letMovie.image} />
                <CardBody>
                    <CardTitle tag="h5">Film description</CardTitle>
                    <CardText>
                        {letMovie.title} {letMovie.year}
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                            {letMovie.prise}
                        </small>
                        <Button variant="primary" onClick={() => { navigate('/') }}>Go somewhere</Button>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}
export default Description;
