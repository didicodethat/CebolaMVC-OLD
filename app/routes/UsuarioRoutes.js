var express = require('express')
var router = express.Router()
var UserController = require('UserController')

router.get('/'function(req,res,next){
    UserController.index(req,res,next)
})
router.get('/cadastrar',function(req,res,next){

})

module.exports = router