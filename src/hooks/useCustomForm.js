import React, { useState } from 'react'

export const useCustomForm = (initForm = {}) => {

    const [form, setForm] = useState(initForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onReset = () => {
        setForm(initForm)
    }
    return ({
        form,
        onInputChange,
        onReset
    })
}