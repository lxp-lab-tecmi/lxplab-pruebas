import React, { useEffect } from 'react'
import { useForm } from '../../Hooks/useForm'

export const FilterCatalogue = ({ setFilter }) => {
    const [formValues, , handleInputChange] = useForm({ filterPost: '' })

    const { filterPost } = formValues

    useEffect(() => {
        setFilter(filterPost)
    }, [filterPost, setFilter])

    return (
        <div>
            <div className="container filter">
                <h1>Catálogo de pruebas OCJ</h1>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar título..."
                        name="filterPost"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    )
}
