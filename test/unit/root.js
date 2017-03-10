'use strict';

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;

// sample code to be modified
// copied from: https://medium.com/@thedon/how-test-your-hapi-api-with-lab-b72f6e8ed641#.uhal5dmnz

describe('Routes /todo', () => {
  // let token;
  // before((done) => {
  //     let options = {
  //       method: 'POST',
  //       url: '/user',
  //       payload: {
  //         name: 'Jack Bauer',
  //         username: 'jack_b',
  //         email: 'jbauer@24hours.com',
  //         password: '#24hoursRescuePresident'
  //       }
  //     };

  //     server.inject(options, (response) => {
  //       token = response.result.token;
  //       done();
  //     });
  // });

    describe('GET /', () => {
        it('return 200 HTTP status code', (done) => {
            db.Todo.remove(() => {
                const options = {
                    method: 'GET',
                    url: '/todo',
                    headers: { Authorization: `Bearer ${token}` }
                };

                server.inject(options, (response) => {
                    expect(response).to.have.property('statusCode', 200);
                    done();
                });
            });
        });

        it('returns an empty array when todo is empty', (done) => {
            db.Todo.remove(() => {
                const options = {
                    method: 'GET',
                    url: '/todo',
                    headers: { Authorization: `Bearer ${token}` }
                };
                server.inject(options, (response) => {
                    expect(response).to.have.property('result');
                    expect(response.result).to.have.length.least(0);
                    done();
                });
            });
        });

        it('return 1 todo at a time', (done) => {
            const options = {
                method: 'GET',
                url: '/todo',
                headers: { Authorization: `Bearer ${token}` }
            };
            server.inject(options, (response) => {
                expect(response).to.have.property('result');
                expect(response.result).to.have.length.least(1);

                const todo = response.result;
                expect(todo).to.have.property('name');
                expect(todo.name).to.contain('TODO Task');
                expect(todo).to.have.property('checked', false);
                done();
            });
        });
    });
});

