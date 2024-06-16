import React from 'react'
import { ModalInsert } from './ModalInsert'
import { ModalUpdate } from './ModalUpdate'

export const DataModal = ({ datos, castEdit, handleNew, onEditCast, onCancelModal }) => {
    return (
        <>
            <ModalInsert
                datos={datos}
                handleNew={(newCast) => handleNew(newCast)}
                onCancelModal={onCancelModal} />
            <ModalUpdate
                datos={datos}
                castEdit={castEdit}
                onHandleChange={(cast) => onEditCast(cast)}
                onCancelModal={onCancelModal} />
        </>
    )
}
