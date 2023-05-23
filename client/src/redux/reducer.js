import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRY, ORDER_ALPHABETICAL, ORDER_BY_POP, ORDER_BY_CONT, FILTER_BY_ACT, GET_ACTIVITIES, CAMBIO } from "./actions";

const initialState = {
    paises: [],
    allCountrys: [],
    detail: {},
    activities: [],
    allActivities: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
			return {...state, paises: action.payload, allCountrys: action.payload}

        case GET_COUNTRY_BY_NAME:
            const country = action.payload;
            return {...state, allCountrys: country}

        case GET_COUNTRY:
            return {...state, detail: action.payload}

        case ORDER_ALPHABETICAL:
            const ord_alp = action.payload === "asc" ?
                state.paises.sort( function( a,b ){
                    if(a.name > b.name)
                        return 1
                    else if (b.name > a.name)
                        return -1
                    else return 0
                }) :
                state.paises.sort( function( a,b ){
                    if(a.name > b.name)
                        return -1
                    else if (b.name > a.name)
                        return 1
                    else return 0
                })
            return {...state, paises: ord_alp}

        case ORDER_BY_POP:
            const ord_pop = action.payload === "men" ?
                state.paises.sort( function( a,b ){
                    if(a.population > b.population)
                        return 1
                    else if (b.population > a.population)
                        return -1
                    else return 0
                }) :
                state.paises.sort( function( a,b ){
                    if(a.population > b.population)
                        return -1
                    else if (b.population > a.population)
                        return 1
                    else return 0
                })
            return {...state, paises: ord_pop}    

        case ORDER_BY_CONT:  
            const allCountrys = state.allCountrys;
            const continentFiltered = action.payload === "All" ? allCountrys : allCountrys.filter(e => e.continents === action.payload)
            console.log(continentFiltered)
            return{...state,allCountrys: continentFiltered}

        case GET_ACTIVITIES:
            return{...state, activities:action.payload, allActivities:action.payload}

        case FILTER_BY_ACT:
            const allCountries2 = state.allCountrys;

            const solo = allCountries2.filter((pais) => {
             return pais.Activities.length > 0;
             });

            let array = [];

            for (let i = 0; i < solo.length; i++) {
            for (let j = 0; j < solo[i].Activities.length; j++) {
             if (solo[i].Activities[j].name === action.payload) {
                   array.push(solo[i]);
                 }
                }
                }

            const filtro = action.payload === "Todos" ? allCountries2 : array;


            return {
                 ...state,
                 countries: filtro,
        }

        // case CAMBIO:
        //     const nuevo = state.paises
        //     const nuevo2 = nuevo.filter( e => {
        //         e.Activities
        //     })

		default:
            return {...state};
    }
}

export default rootReducer;