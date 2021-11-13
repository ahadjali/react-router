import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Input,
} from "reactstrap";

function AddMovie({ addNewMovie }) {
    const [movie, setMovie] = useState({
        id:uuidv4(),
        image: "",
        title: "",
        year: "",
        rating: "",
        prise: "",
    });

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewMovie(movie);
    };

    return (
        <div className="AddMovie">
            <br />
            <Button style={{ marginLeft: "15px" }} className="add-btn" color="success" onClick={toggle}>
                Add Movie +
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Add New Movie</ModalHeader>
                <ModalBody>
                    <Label for="Movie Name">Adding Movie</Label>
                    <Input
                        type="text"
                        name="image"
                        placeholder="Enter movie image..."
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="title"
                        placeholder="Enter movie title..."
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="year"
                        placeholder="Enter movie year..."
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="rating"
                        placeholder="Enter movie rating..."
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="prise"
                        placeholder="Enter movie prise..."
                        onChange={handleChange}
                    />
                </ModalBody>

                <ModalFooter className="buttons">
                    <Button onClick={handleSubmit}
                        className="submit-btn"
                        color="success"
                    >
                        Submit
                    </Button>

                    <Button onClick={toggle}
                        className="cancel-btn"
                        color="danger"
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

        </div>

    )

};

export default AddMovie;