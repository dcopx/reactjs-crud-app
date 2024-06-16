import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Button } from 'react-bootstrap';

export const ModalUpdate = ({ datos, castEdit, onHandleChange, onCancelModal }) => {
    const { id, personaje, anime } = castEdit;
    const [editPersonaje, setEditPersonaje] = useState('');
    const [editAnime, setEditAnime] = useState('');

    // UseEffect para actualizar los estados locales cuando castEdit cambie
    useEffect(() => {
        setEditPersonaje(personaje);
        setEditAnime(anime);
    }, [personaje, anime]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'personaje') {
            setEditPersonaje(value);
        } else if (name === 'anime') {
            setEditAnime(value);
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const updatedCast = {
            id: id,
            personaje: editPersonaje,
            anime: editAnime,
        };
        onHandleChange(updatedCast);
    };

    const { modalActualizar } = datos;

    return (
        <Modal show={modalActualizar} >
            <ModalHeader >
                <h3>Editar Registro</h3>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label> Id: </label>
                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        value={id}
                    />
                </FormGroup>

                <FormGroup>
                    <label> Personaje: </label>
                    <input
                        className="form-control"
                        name="personaje"
                        type="text"
                        onChange={onInputChange}
                        value={editPersonaje}
                    />
                </FormGroup>

                <FormGroup>
                    <label> Anime: </label>
                    <input
                        className="form-control"
                        name="anime"
                        type="text"
                        onChange={onInputChange}
                        value={editAnime}
                    />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={onFormSubmit}> Editar </Button>
                <Button color="danger" onClick={onCancelModal}> Cancelar </Button>
            </ModalFooter>
        </Modal>
    );
};
