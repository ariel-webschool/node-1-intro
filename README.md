# Nodejs

## 1. Creation de serveur en 3 etapes.
1. importer la librairie http
```json
var http = require('http')
```
2. Instanciation du server:
```javascript
let server = http.createServer()
```

3. Exposition, deploiement du server:
```javascript
server.listen(<PORT:number>, function() {})
```