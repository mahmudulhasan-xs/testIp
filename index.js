// initialize simple express app that will print ip address of the request on root route
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.send(`Your IP address is ${ip}`);
    }
);

app.listen(3300, () => console.log('Server is running on port 3300'));
