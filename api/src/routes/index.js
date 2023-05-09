const { Router } = require('express');
const server = require('../app');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountriesRoutes = require('./CountriesRoutes');
const ActivitiesRoutes = require('./ActivitiesRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountriesRoutes);
router.use('/activities', ActivitiesRoutes);

module.exports = router;
