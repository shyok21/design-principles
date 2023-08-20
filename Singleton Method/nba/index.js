const express = require('express');
const { nbaFactory } = require('./nba');

const Logger = require('./logger');

const app = express();
const logger = Logger.getInstance();

const PORT = 3000;

app.get('/nba', async (req, res) => {
    const { id, resource } = req.query;
    await nbaFactory(resource)()?.fetchDetails(id);
    res.send('Fetching Done! Please check the Logs');
})

app.get('/logs', (req, res) => {
    let { start, end } = req.query;

    const MIN_VALUE = 0;
    const MAX_VALUE = 1000000;

    start = start ? Math.max(Number(start), MIN_VALUE) : MIN_VALUE;
    end = end ? Math.min(Number(end), MAX_VALUE) : MAX_VALUE;

    const logs = logger.export(start, end);

    res.status(200).json(logs);
})

app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
})