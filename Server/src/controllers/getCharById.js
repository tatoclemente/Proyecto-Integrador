const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/"
const getCharById = (res, id) => {
  
  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } = response.data;
      res.writeHead(200, { "content-Type": "application/json" });
      res.end(
        JSON.stringify({ id, name, gender, species, origin, image, status })
      );
    })
    .catch((reason) => {
      res.writeHead(500, {"Content-Type": "text/plain"})
      res.end(reason.message)
      console.log("Error: " + reason.response.status);
    });
};

module.exports = getCharById;
