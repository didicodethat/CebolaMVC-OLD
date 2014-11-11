var app, cons, express, server, cnn;
express = require('express')

cons = require('consolidate')
cnn = require('./app/models/components/ConnectionFactory')

var app = express()

app.engine('mst', cons.mustache)

app.set('view engine', 'mst')

app.set('views', __dirname + '/app/view')

app.use(express["static"](__dirname + '/public'))

app.use('/usuario',)

server = app.listen(3000, function() {
    var host, port;
    host = server.address().address
    port = server.address().port
    return console.log("O servidor está funcionando em http://" + host + ":" + port)
})

