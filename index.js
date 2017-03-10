'use strict';

const Hapi = require('hapi');

module.export = function (callback) {

    const server = new Hapi.Server();
    server.connection({ port: 3000, host: 'localhost' });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('Server up!');
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
};
