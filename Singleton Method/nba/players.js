const axios = require('axios');
const Logger = require('./logger');

const logger = Logger.getInstance();

class Players {
    constructor () {
        this.name = "players"
    }

    async fetchDetails (id) {
        const apiBaseUrl = 'https://free-nba.p.rapidapi.com/players';
        const headers = {
            'X-RapidAPI-Key': '04024786d9msh11d3e0e57331024p1039f6jsn1ec7bfbd8702',
            'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }

        const response = await axios.get(`${apiBaseUrl}/${id}`, { headers });
        logger.log(response.status, this.name, response.data?.first_name);
    }
}

module.exports = Players;