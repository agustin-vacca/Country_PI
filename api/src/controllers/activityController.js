const {Activity, Country} = require('../db');

// Version Completa y larga
// const createActivity = async (name, difficulty, duration, season) => {
//     const newActivity = await Activity.create({name, difficulty, duration, season});
//     return newActivity; 
// }

//Version Corta
const createActivity =  (name, difficulty, duration, season) =>
    Activity.create({name, difficulty, duration, season});

const getActivities = () => {
    const activities = Activity.findAll({
        include: [
            {
                model: Country,
                attributes: ["name"],
                through:{attributes:[] }
            }
        ]
    });
    return activities;
}

module.exports = {
    createActivity,
    getActivities
}