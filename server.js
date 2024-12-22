// server.js

var http = require('http'); // on recupere la librairie
const PORT = 8080 // le port sur lequel l'application demarre

// ROUTE: / -> recoit un message Hello World!
function serverResponse(req,res) {
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify({"message":'Hello World!'}));
}


http.createServer(serverResponse)	// Instanciation du server.
	.listen(PORT, function() {		// Ecoute du server sur le port. (Networking)
		console.log("Le serveur demarre sur le port "+PORT)
	});


