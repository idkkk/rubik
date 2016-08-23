var http = require('http'), 
    httpProxy = require('http-proxy');
     
   
var proxy = httpProxy.createProxyServer({});
proxy.on('error', function (err, req, res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Something went wrong. '+ err);
});
 
 
var server = require('http').createServer(function(req, res){   
 
    var proxyUrl = req.headers.host;
    console.log("proxyUrl : ",proxyUrl)
    var targetURL = "http://127.0.0.1:80/";
    switch(proxyUrl){
    	case "web.rubik.com":
    		targetURL = "http://127.0.0.1:8081/";
    		break;
    	case "api.rubik.com":
    		targetURL = "http://127.0.0.1:8082/";
    		break;
    }
    console.log("proxy path", req.url)
    if(req.url.indexOf("api") > 0){
        targetURL = "http://127.0.0.1:8082/";
    }
    console.log("targetURL : ",targetURL)
	proxy.web(req, res, { target: targetURL});  
});

server.listen(80);
