'use strict';

// server.bind() will not work if arrouw functions are used to define route handlers
// always use the function keyword when defining a handler
module.exports = [{
    method: 'GET',
    path: '/',
    config: {
        handler: function (request, reply) {
            reply('Server up!');
        },
        tags: ['api']
    }
}];
