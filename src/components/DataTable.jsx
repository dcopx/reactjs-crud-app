import React from 'react'
import { Table, Button } from 'react-bootstrap'

export const DataTable = ({ data, onEditClick, onDeleteClick }) => {
    return (
        <Table >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Personaje</th>
                    <th>Anime</th>
                    <th>Acción</th>
                </tr>
            </thead>

            <tbody>
                {data.map((dato) => (
                    <tr key={dato.id}>
                        <td>{dato.id}</td>
                        <td>{dato.personaje}</td>
                        <td>{dato.anime}</td>
                        <td>
                            <Button
                                color="primary"
                                onClick={() => onEditClick(dato)}
                            >
                                Editar
                            </Button>{" "}
                            <Button
                                color="danger"
                                onClick={() => onDeleteClick(dato)}
                            >Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
