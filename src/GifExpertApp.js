import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    //Asi no porque la constante seria inmutable y react no renderizaria de nuevo si este cambiase
    //const categories = ['One Punch','Samurai','Dragon Ball']
    
    const [categories, setCategories] = useState(['One Punch']);

    //Se haria asi
    /* const handleAdd = () => {

        //Para añadir un nuevo elemento sin cargarnos el array anterior
        setCategories(categorias => [...categorias,'Zombies']);

    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick = {handleAdd}>Agregar</button> */}

            <ol>
                { 
                    categories.map(category => 
                        //Para el AddCategory
                        //return <li key = { category }>{ category }</li>

                        //Para el GifGrid
                        <GifGrid 
                            key = { category } 
                            category = { category } 
                        />
                    )
                }
            </ol>
        </>
    )
}
