import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    
    //El inputValue es el valor por defecto (Hola Mundo)
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        //Para eliminar el intro
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            
            setCategories(categorias => [inputValue,...categorias]);
            setInputValue('')

        }
    }

    return (
        <>
            {/* Con el form por defecto al hacer click hace un refresh del navegador. El onSubmit es cuando le das al intro */}
            <form onSubmit={handleSubmit}>

                <input 
                    type = "text"
                    value = { inputValue }
                    onChange = {handleInputChange}
                />

            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}