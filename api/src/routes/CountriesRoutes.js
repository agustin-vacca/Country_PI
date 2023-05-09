const { Router } = require('express');
const express = require('express');

const CountriesRoutes = Router();

//Importo los handlers con la logica de las rutas
const {getCountriesHandler,getCountrieHandler} = require('../handlers/countriesHandlers')

CountriesRoutes.get('/', getCountriesHandler);
CountriesRoutes.get('/:id', getCountrieHandler);


module.exports = CountriesRoutes;