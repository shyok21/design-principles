const Players = require('./players');
const Teams = require('./teams');
const Games = require('./games');

const serviceByResource = {
    'players': new Players(),
    'teams': new Teams(),
    'games': new Games()
}

const nbaFactory = (resource) => {
    const create = () => {
        return serviceByResource[resource];
    }

    return create;
}

module.exports = { nbaFactory };