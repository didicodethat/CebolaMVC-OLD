require 'coffee-script'
mongoose = require 'mongoose'
Schema = mongoose.Schema
bcrypt = require 'bcrypt'
cnn = require './components/ConnectionFactory'
SALT_WORK_FACTOR = 10

UserSchema = new Schema(
    # Login do usuário
    username : 
        type : String
        required : true
        index : 
            unique : true
    # Senha do usuário
    password : 
        type : String
        required : true
    # String de recuperação de senha
    recovery : String
    # Email do usuário
    mail : 
        type : String
        required : true
    # Grupo o qual o usuário pertence (chave externa)
    _group : 
        type : Number
        ref : 'UserGroup' 
)

UserSchema.pre "save", (next) ->
    user = this
    
    # only hash the password if it has been modified (or is new)
    return next() unless user.isModified("password")
    
    # generate a salt
    bcrypt.genSalt SALT_WORK_FACTOR, (err, salt) ->
        return next(err) if err
        
        # hash the password along with our new salt
        bcrypt.hash user.password, salt, (err, hash) ->
            return next(err) if err
            
            # override the cleartext password with the hashed one
            user.password = hash
            next()
            return

        return

    return

UserSchema.methods.comparePassword = (candidatePassword, cb) ->
    bcrypt.compare candidatePassword, @password, (err, isMatch) ->
        return cb(err)    if err
        cb null, isMatch
        return

    return


# retorna a model
module.exports = cnn.model 'User', UserSchema
