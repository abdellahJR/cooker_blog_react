<<<<<<< HEAD
<<<<<<< Updated upstream
import React from "react";
=======
import React, {useState} from "react";
import {Button, Container, TextField} from "@material-ui/core";
>>>>>>> df5fd0ee1b01d34ca803ab90f5c1eb3d48a1b9f9

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
<<<<<<< HEAD
        <h1>Créer un article</h1>
=======
import React, {useState} from "react";
import {Button, Container, TextField} from "@material-ui/core";

export default function CreateBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
=======
>>>>>>> df5fd0ee1b01d34ca803ab90f5c1eb3d48a1b9f9
        <Container maxWidth="lg">
            <h1>Créer un article</h1>
            <form noValidate>
                <TextField
                    id="outlined-basic"
                    label="Titre"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleChange}
                    value={title}
                />
                <TextField
                    id="outlined-textarea"
                    label="Contenu"
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={10}
                    margin="normal"
                    onChange={handleChange}
                    value={content}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Créer
                </Button>
            </form>
        </Container>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> df5fd0ee1b01d34ca803ab90f5c1eb3d48a1b9f9
    );
}