//Coleccion de todos los elementos
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/* import React, { useState, useEffect } from 'react' */
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    //const [count, setCount] = useState(0);

    //const [images, setImages] = useState([]);


    const { data: images , loading } = useFetchGifs( category );
    

    return (
        <>
            <h3 className = "animate__animated animate__fadeIn"> { category } </h3>

            {/* Este tipo de ternario dice que si esta cargando, mostrar el parrafo, y si es falso que no muestre nada */}
            { loading && <p className = "animate__animated animate__flash">Loading</p> }

            <div className = "card-grid">

                {/* <h3>{ count }</h3>
                <button onClick = { () => setCount( count + 1)}></button> */}

                {
                    images.map( (img) => (
                            <GifGridItem 
                                key = { img.id }
                                //De esta manera habria que recibirlo en el componente con un props.img para abrir las propiedades
                                //img = { img }
                                //Otra forma de hacer lo de arriba. De esta manera manda cada una de las propiedades del objeto como una propiedad independiente
                                { ...img }
                            />
                    ))
                }
            </div>
        </>
    )
}
