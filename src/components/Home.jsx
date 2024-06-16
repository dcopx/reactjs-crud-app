
import React, { useState } from 'react'
import { Container, Button, Table, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'react-bootstrap'
import { DataTable } from './DataTable';
import { DataModal } from './DataModal';

const data = [
    { id: 1, personaje: "Naruto", anime: "Naruto" },
    { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
    { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

export const Home = () => {
    const [datos, setDatos] = useState({
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            personaje: "",
            anime: "",
        },
    })
    const [castEdit, setCastEdit] = useState({
        id: "",
        personaje: "",
        anime: "",
    })

    const onNewClick = () => {
        setDatos({
            ...datos,
            modalInsertar: true,
            modalActualizar: false
        })
    }
    const onEditClick = (cast) => {
        setCastEdit(cast)
        setDatos({
            ...datos,
            modalInsertar: false,
            modalActualizar: true
        })
    }
    const onDeleteClick = (cast) => {
        setDatos({
            ...datos,
            modalInsertar: false,
            modalActualizar: false
        })
    }

    const onCancelModal = () => {
        setDatos({
            ...datos,
            modalInsertar: false,
            modalActualizar: false
        })
    }
    const onHandleNew = (cast) => {
        data.push(cast)
        setDatos({
            data: data,
            modalActualizar: false,
            modalInsertar: false,
        })
    }

    const onEditCast = (cast) => {


        data.map((d) => {
            if (d.id == cast.id) {
                d.personaje = cast.personaje;
                d.anime = cast.anime;
            }
        });

        setDatos({
            data: data,
            modalActualizar: false,
            modalInsertar: false,
        })

    }
    return (
        <>
            <Container>
                <br />
                <Button
                    className="success"
                    onClick={() => onNewClick()}
                >
                    Crear
                </Button>
                <br />
                <br />
                <DataTable
                    data={datos.data}
                    onEditClick={(cast) => onEditClick(cast)}
                    onDeleteClick={(cast) => onDeleteClick(cast)} />
            </Container>

            <DataModal
                datos={datos}
                castEdit={castEdit}
                handleNew={onHandleNew}
                onEditCast={onEditCast}
                onCancelModal={onCancelModal} />

        </>
    )
}
