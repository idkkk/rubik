'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8082 
});

function mockProducts(){
    const mockState = new Object()
    mockState.dataSource = []
    for (let i = 0; i < 5; i++) {
      mockState.dataSource.push({
        key: i,
        name: `商品${i}`,
        num: `${i+Math.floor(Math.random()*10)}`,
        desc: `网店直供${i}号`,
      });
    }
    mockState.searchSource = {name:"",desc:""}
    return mockState
  }


// Add the route
server.route({
    method: 'GET',
    path:'/api', 
    handler: function (request, reply) {

        return reply(mockProducts());
    }
});


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
