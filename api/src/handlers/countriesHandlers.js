const { all } = require('axios');
const {getInfo} = require('../controllers/countriesController')

const getCountriesHandler = async(req,res) => {
    try {
        const {name} = req.query;
        const all = await getInfo();

        if(name){
            const CountriesName = all.filter( e => e.name.toLowerCase().includes(name.toLowerCase()))
            res.status(200).send(CountriesName);
        } else { 
            res.status(200).send(all)
        }
            
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
};

const getCountrieHandler = async (req,res) => {
    try {
        const countries = await getInfo();
        const {id} = req.params;
        const countryId = countries.filter( e => e.id  == id.toUpperCase() )
        
        if(countryId)
            res.status(200).send(countryId);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
};


module.exports = {
    getCountriesHandler,
    getCountrieHandler,
}

