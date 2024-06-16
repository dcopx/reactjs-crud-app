import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Button } from 'react-bootstrap'
import { useCustomForm } from '../hooks/useCustomForm'

export const ModalInsert = ({ datos, handleNew, onCancelModal }) => {
    const { form: { personaje, anime }, onInputChange, onReset } = useCustomForm({
        personaje: "",
        anime: "",
    })
    const { modalInsertar, data } = datos
    const onFormSubmit = (event) => {
        event.preventDefault()
        if (personaje <= 1) return

        const newCast = {
            id: data.length + 1,
            personaje: personaje,
            anime: anime,
        }

        handleNew(newCast)
        onReset()
    }

    return (
        <Modal show={modalInsertar}>
            <ModalHeader>
                <div><h3>Insertar Personaje</h3></div>
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <label> Id: </label>

                    <input
                        className="form-control"
                        readOnly
                        type="text"
                        name='id'
                        value={data.length + 1}
                    />
                </FormGroup>

                <FormGroup>
                    <label> Personaje: </label>
                    <input
                        className="form-control"
                        name="personaje"
                        type="text"
                        onChange={onInputChange}
                    />
                </FormGroup>

                <FormGroup>
                    <label>
                        Anime:
                    </label>
                    <input
                        className="form-control"
                        name="anime"
                        type="text"
                        onChange={onInputChange}
                    />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button
                    color="primary"
                    type="submit"
                    onClick={onFormSubmit}
                >
                    Insertar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={onCancelModal}
                >
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    )
}
