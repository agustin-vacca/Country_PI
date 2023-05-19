const {createActivity, getActivities} = require('../controllers/activityController');
const {Country} = require('../db');
const {Op} = require("sequelize");

const getActivitiesHandler = async(req,res) => {
    try {
        const all = await getActivities()
        res.status(200).send(all);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
};

const postActivitiesHandler = async (req,res) => {
    try {
        const {name, difficulty, duration, season, countries} = req.body;
        const newActivity = await createActivity(name,difficulty, duration, season);

        console.log(countries[0]);

        // const country = await Country.findOne({
        //      where: { 
        //         id: { [Op.iLike]: countries[0] }
        //     }
        // })
        // console.log(country)
        await newActivity.addActivities(countries[0])
        

        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json( {error: error.message });
    }
}

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler
}