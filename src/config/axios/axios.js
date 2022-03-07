//configuración axios
import axios from "axios";

//token de usuario ailén mapbox:
const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN;
//URL del back:
const baseURL = process.env.REACT_APP_BASE_URL;

//para el autocompletado del buscador:
const searchApiMapBox = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: mapBoxToken,
        autocomplete: true,
        country: ['AR', 'UY', 'BR', 'CO', 'US', 'PE'], //acá se hace filtro de países según código ISO 3166-1 alpha-2
        types: ['country', 'region', 'locality', 'neighborhood']
    }
});

//para obtener la longitud y latitud:
const searchLocation = axios.create({
    baseURL: `${baseURL}`
});

//para obtener lista de hoteles con los datos del buscador:
const getList = axios.create({
    baseURL: `${baseURL}`,
    params: {
        page_number: 1,
        currency: 'ARS',
        locale: 'es_ES',
        sort_order: 'STAR_RATING_HIGHEST_FIRST'  
    }
});

export { searchApiMapBox, searchLocation, getList };