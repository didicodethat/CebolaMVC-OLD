var vows = require('vows'),
    assert = require('assert');

vows.describe('User Controller').addBatch({
    'O Usuário' : {
        topic : require('./app/controller/UserController.js'),
        'Deve ser salvo' : {
            topic : function(UserController) {
                var usr = 'Usuario'+ (Math.random() * 1000)
                UserController.save( usr, 'senha123', 'email@email.com')
                return {username : usr, User : UserController.User}
            },
            'Foi salvo' : function(topic){
                console.log(topic.User.findOne({'username' : topic.username }))
                assert.equal(true,true)
            }
        }
    }
}).run()