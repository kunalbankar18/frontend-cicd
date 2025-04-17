const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const URL = 'http://backend:5000/api';
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.get('/', async function (req, res) {
    const options = { method: 'GET' };

    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        res.render('index', { data }); // pass data to EJS template
    } catch (err) {
        console.error('error:', err);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');

});
