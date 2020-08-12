import { useState , useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    });

    //El useEfect es una especie de condicional que hace que se renderice el componente una unica vez. Sin el cada vez que damos al boton, react recargaria de nuevo la pagina y con ello la peticion. Seria un bucle infinito
    useEffect( () => {
        getGifs( category )
            .then( imgs => {

                //console.log(imgs);
                setState({
                    data : imgs,
                    loading: false
                });


            });
        // Con el [] ya no se disparara la peticion cada vez. Si metemos dentro del array categoria es para que cada vez que cambie la categoria, que lance la peticion http
    }, [ category ]);


    /* setTimeout( () => {
        setState({
            data : [1,2,3,4,5,6,7,8],
            loading : false})
    },3000); */

    return state;

}