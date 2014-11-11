module.exports = function() {
    var cnn = require('./components/ConnectionFactory'), SALT_WORK_FACTOR, Schema, UserSchema, bcrypt, mongoose;
    mongoose = require('mongoose');
    Schema = mongoose.Schema;
    bcrypt = require('bcrypt');
    SALT_WORK_FACTOR = 10;
    
    /* Definição de campos */
    UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        },
        recovery: String,
        email: {
            type: String,
            required: true,
            index: {
                unique: true,
            },
            validated : {
                type : boolean,
                default : false
            },
        },
        _group: {
            type: Number,
            ref: 'UserGroup'
        }
    });
    /* Validação */
    UserSchema.path('email').validate(function(email) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(email.text); // Assuming email has a text attribute
    }, 'The e-mail field cannot be empty.');
    /* Before Save */
    UserSchema.pre("save", function(next) {
        var user;
        user = this;
        if (!user.isModified("password")) {
            return next();
        }
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    });
    /* Compara senha */
    UserSchema.methods.comparePassword = function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) {
                return cb(err);
            }
            cb(null, isMatch);
        });
    };
    return cnn.model('User', UserSchema);
};