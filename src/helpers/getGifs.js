//Postman te crea la url
//Utilizamos el postman con un nuevo request get con la sintexis de endpoint search y el api_key = 'el api key'
export const getGifs = async( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=Vtx27CV4Lia6MJFNvGKYST1TFX9Lw65A&q=${ encodeURI (category)}&limit=10`
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            //Si pone la interrogacion es para preguntar si hay alguna imagen que no tiene esa propiedad que no casque
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);

    //Para cargar las imagenes
    //setImages( gifs );

    return gifs;

}