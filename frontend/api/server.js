'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8082 
});

function mockProducts(){
    const mockState = []
    for (let i = 0; i < 5; i++) {
      mockState.push({
        key: i,
        name: `api商品${i}`,
        num: `${i+Math.floor(Math.random()*10)}`,
        desc: `网店直供${i}号`,
      });
    }
    return mockState
}

function mockProductsBySearch(name, desc){
    const mockState = []
    for (let i = 0; i < 5; i++) {
      mockState.push({
        key: i,
        name: `${name}${i}`,
        num: `${i+Math.floor(Math.random()*10)}`,
        desc: `${desc}${i}`,
      });
    }
    return mockState
}

// 添加路由
server.route({
    method: 'GET',
    path:'/api/add/{key}', 
    handler: function (request, reply) {
        return reply({state: "ok", key: encodeURIComponent(request.params.key)});
    }
});

// 删除路由
server.route({
    method: 'GET',
    path:'/api/delete/{key}', 
    handler: function (request, reply) {
        return reply({state: "ok", key: encodeURIComponent(request.params.key)});
    }
});

// 修改路由
server.route({
    method: 'GET',
    path:'/api/update/{key}', 
    handler: function (request, reply) {
        return reply({state: "ok", key: encodeURIComponent(request.params.key)});
    }
});

// 查询路由
server.route({
    method: 'GET',
    path:'/api/all', 
    handler: function (request, reply) {
        return reply(mockProducts());
    }
});

server.route({
    method: 'GET',
    path:'/api/search/{name}/{desc}', 
    handler: function (request, reply) {
        let name = encodeURIComponent(request.params.name)
        let desc = encodeURIComponent(request.params.desc)
        return reply(mockProductsBySearch(name, desc));
    }
});

// 启动服务
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
