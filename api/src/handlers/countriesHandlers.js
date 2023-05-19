const { getInfo, getCountry } = require("../controllers/countriesController");

const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const all = await getInfo(name);
    res.status(200).send(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountrieHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const countryId = await getCountry(id.toUpperCase());
    if (countryId) res.status(200).send(countryId);
    else res.status(200).send("Country not found");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
  getCountrieHandler,
};
