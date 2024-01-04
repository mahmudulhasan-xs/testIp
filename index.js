// initialize simple express app that will print ip address of the request on root route
const express = require('express');
const app = express();
app.set('trust proxy', 1);
app.get('/', (req, res) => {
    const ip = req.ip;
    res.send(`Your IP address is ${ip}`);
}
);

app.listen(3300, () => console.log('Server is running on port 3300'));
