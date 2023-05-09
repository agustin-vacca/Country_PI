import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const ORDER_ALPHABETICAL = "ORDER_ALPHABETICAL";
export const ORDER_BY_POP = "ORDER_BY_POP";
export const ORDER_BY_CONT = "ORDER_BY_CONT";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_BY_ACT = "FILTER_BY_ACT";
export const CAMBIO = "CAMBIO";

export const getCountries = () => {
    return async function(dispatch){
        const totalCountry = await axios.get('http://localhost:3001/countries')
        const countrys = totalCountry.data;
        dispatch({type: GET_COUNTRIES, payload: countrys})    
    };
};

export const getCountry = (id) => {
    return async function(dispatch){
        const country = await axios.get(`http://localhost:3001/countries/${id}`);
        const countryId = country.data;
        dispatch({type: GET_COUNTRY, payload: countryId.pop()})
    }
};


export const getCountryByName = (name) => {
    return async function(dispatch){
        const country = await axios.get(`http://localhost:3001/countries?name=${name}`);
        const countryName = country.data;
        dispatch({type: GET_COUNTRY_BY_NAME, payload: countryName})
    }
};

export const orderAlphabetical = (option) => {  
        return {type: ORDER_ALPHABETICAL, payload: option}
};

export const orderByPop = (option) => {
        return {type: ORDER_BY_POP, payload: option}
};

export const orderByContinent = (option) => {
    return {type: ORDER_BY_CONT, payload: option}
};

export const getActivities = () => {
    return async function(dispatch){
        const activities = await axios.get('http://localhost:3001/activities')
        const all = activities.data;
        dispatch({type: GET_ACTIVITIES, payload: all})
    }
}

export const filterByAct = (option) => {
    return {type: FILTER_BY_ACT, payload: option}
}

export const cambio = (option) => {
    return {type: CAMBIO, payload: option}
}