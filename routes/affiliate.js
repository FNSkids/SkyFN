const express = require('express');
const app = express();

app.get('/affiliate/api/public/affiliates/slug/:slug', async (req, res) => {
    res.json({
			id: '69420694206942069420694206942069',
			slug: req.params.affiliateName,
			displayName: req.params.affiliateName,
			status: 'ACTIVE',
			verified: true
		})
})

app.all('/', async (req, res) => {
    res.redirect('https://SuburbanFunnyCoin.prankielief.repl.co');
})

module.exports = app;
