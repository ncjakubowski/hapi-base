'use strict'; // eslint-disable-line no-multi-assign

const Hapi = require('hapi');
const Routes = require('./routes');

module.exports = function (callback) {
    const server = new Hapi.Server();
    server.connection({ port: 3000, host: 'localhost' });

    server.route(Routes);

    callback(null, server);
};
