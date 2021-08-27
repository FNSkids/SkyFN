const express = require('express');
const app = express();
const fs = require('fs');
const config = require('../config');

app.post('/api/v1/vbucks', (req, res) => {
    if (!fs.existsSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`)) {
        fs.copyFileSync(`${config.directory}/cache/templates/config.json`, `${config.directory}/cache/profiles/${req.query.accountId}.json`);
    }
    vbucks = req.query.vbucks;
    var accountConfig = JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`));
    accountConfig.vbucks = vbucks;
    fs.writeFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`, JSON.stringify(accountConfig, null, 3))
    res.json(JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`))).end();
})

app.post('/api/v1/level', (req, res) => {
    if (!fs.existsSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`)) {
        fs.copyFileSync(`${config.directory}/cache/templates/config.json`, `${config.directory}/cache/profiles/${req.query.accountId}.json`);
    }
    level = req.query.level;
    var accountConfig = JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`));
    accountConfig.level = level;
    fs.writeFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`, JSON.stringify(accountConfig, null, 3))
    res.json(JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`))).end();
})

app.post('/api/v1/battlestars', (req, res) => {
    if (!fs.existsSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`)) {
        fs.copyFileSync(`${config.directory}/cache/templates/config.json`, `${config.directory}/cache/profiles/${req.query.accountId}.json`);
    }
    battlestars = req.query.battlestars;
    var accountConfig = JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`));
    accountConfig.battlestars = battlestars;
    fs.writeFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`, JSON.stringify(accountConfig, null, 3))
    res.json(JSON.parse(fs.readFileSync(`${config.directory}/cache/profiles/${req.query.accountId}.json`))).end();
})



module.exports = app;