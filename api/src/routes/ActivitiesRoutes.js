const { Router } = require('express');
const express = require('express');

const ActivitiesRoutes = Router();

const {getActivitiesHandler, postActivitiesHandler} = require('../handlers/activitiesHandler')

ActivitiesRoutes.get('/', getActivitiesHandler);
ActivitiesRoutes.post('/', postActivitiesHandler);

module.exports = ActivitiesRoutes;