require 'coffee-script'
express = require 'express'
User = require './app/models/User'
app = express()

query = User.find({})
query.exec (err,obj)->
    console.log obj

app.use express.static __dirname+'/publico'
app.get '/', (req,res)-> 
    res.send 'Teste aehoooooooo'

server = app.listen 3000, ->
    host = server.address().address
    port = server.address().port