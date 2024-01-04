const express = require('express');
const ipapi = require('ipapi.co');
const app = express();

app.set('trust proxy', true);

app.get('/', (req, res) => {
    const ip = req.ip;
    ipapi.location((location) => {
        res.send(`Your IP address is ${ip} and your location is ${JSON.stringify(location)}`);
    }, ip);
});

app.listen(3300, () => console.log('Server is running on port 3300'));