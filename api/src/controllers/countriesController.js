const {Country,Activity} = require('../db')
const axios = require('axios');

const getInfoApi = async() => {

    try {
    
    const totalCountry = await axios.get('https://restcountries.com/v3.1/all')
    const country = await totalCountry.data.map( data => {
        return{
            id: data.cca3,
            name: data.name.common,
            continents: data.continents[0],
            capital: data.capital != null ? data.capital[0] : "No data",
            subregion: data.subregion,
            area: data.area,
            population: data.population,
            flag: data.flags.png
        }
    })

    return country;

    } catch (error) {
        console.log(error);
    }

};

const getInfoBD = async() => {
    const all = await Country.findAll({
      include: [{
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      }],
    });
    return all;
};


const getInfo = async() => {
    const a = await getInfoApi();
    const b = await getInfoBD();

    const all = [...a,...b];
    return all;
}


module.exports = {
    getInfo,
    getInfoBD,
} 
