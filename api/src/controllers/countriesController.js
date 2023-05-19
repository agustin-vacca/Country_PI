const { Country, Activity } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getInfoApi = async () => {
  try {
    const totalCountry = await axios.get("https://restcountries.com/v3.1/all");
    const country = await totalCountry.data.map((data) => {
      return {
        id: data.cca3,
        name: data.name.common,
        continents: data.continents[0],
        capital: data.capital != null ? data.capital[0] : "No data",
        subregion: data.subregion,
        area: data.area,
        population: data.population,
        flag: data.flags.png,
      };
    });

    return country;
  } catch (error) {
    console.log(error);
  }
};

const postInfoBD = async () => {
  try {
    const allApi = await getInfoApi();

    for (let i = 0; i < allApi.length; i++) {
      //console.log(allApi[i].id);
      const allBD = await Country.create({
        id: allApi[i].id,
        name: allApi[i].name,
        continents: allApi[i].continents,
        capital: allApi[i].capital,
        subregion: allApi[i].subregion,
        area: allApi[i].area,
        population: allApi[i].population,
        flag: allApi[i].flag,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getInfo = async (name) => {
  try {

    if (Country.length === 0) await postInfoBD();

    if (name) {
      const country = Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });

      return country;
    } else {
      const countrys = Country.findAll({
        include: [
          {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
          },
        ],
      });
      return countrys;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCountry = async (id) => {
  const country = Country.findByPk(id, {
    include: [
      {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: { attributes: [] },
      },
    ],
  });
  return country;
};

module.exports = {
  getInfo,
  getCountry,
};
