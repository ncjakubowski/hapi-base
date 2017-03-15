'use strict';

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const expect = Code.expect;
const Index = require('../../index');

let server;

describe('Routes /todo', () => {
    before((done) => {
        Index((err, srv) => {
            if (err) {
                console.log('error in require: ', err);
            }
            server = srv;
        });


        const options = {
            method: 'GET',
            url: '/'
        };

        server.inject(options, () => {
            done();
        });
    });

    describe('GET /', () => {
        it('return 200 HTTP status code', (done) => {
            const options = {
                method: 'GET',
                url: '/'
            };
            server.inject(options, (response) => {
                expect(response).to.include({ statusCode: 200 });
                expect(response.result).to.equal('Server up!');
                done();
            });
        });
    });
});

