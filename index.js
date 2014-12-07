require('http').createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Yo bitch! Qisek zobbi 8=====D');
}).listen(80, 'localhost');

console.log('Server running bitch!');