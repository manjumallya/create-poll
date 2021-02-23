const express = require('express');
const path = require('path');
const stubServerConfig = require('../stubs');

const stubServer = express();
const portNr = 8080;

stubServer.use('/', express.static(path.resolve(__dirname, '../../dist/')));
stubServerConfig(stubServer);

stubServer.listen(portNr, () => {
    console.log(`Stubserver up on port ${portNr}`);
});
