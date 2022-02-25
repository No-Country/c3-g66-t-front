//configuración axios:
import axios from "axios";

//token de usuario mapbox creado por ailén:
const mapBoxToken = 'pk.eyJ1Ijoibm9jb3VudHJ5LTY2IiwiYSI6ImNrenJjZ3RqZjZyc20ydm5mZG4wd3U3bmEifQ.S1LiIZ3AboqkYOVYiSeJNg';

const searchApiMapBox = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: mapBoxToken,
        autocomplete: true,
        country: ['AR', 'UY', 'BR', 'CO', 'US'], //acá se hace filtro de países según código ISO 3166-1 alpha-2
        types: ['country', 'region', 'locality', 'district', 'neighborhood']
    }
});

const searchLocation = axios.create({
    baseURL: 'https://nc-hotely.herokuapp.com/api/v1'
});

export { searchApiMapBox, searchLocation };