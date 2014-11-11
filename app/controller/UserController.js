module.exports = {
    User : require('../models/User'),
    save : function(user, pw, email){
        var user = new this.User({ 
            'username' : usuario,
            'password' : pw,
            'email' : email
        });
        try{
            user.save( function(err){
                throw err;
            });
        } catch (err){
            throw err;
        }
    },
    main : function(req,res,next){
        
    },
}