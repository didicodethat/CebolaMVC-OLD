/**
 * Construtor
 * @param  {[type]} user Objeto Model User
 * @return {[type]}      [description]
 */
module.exports = function(user){
    this.user = user;
    return {
        save : function(){
            var usuariTeste = querystring.stringify({
                username : 'usuariotestes'+Math.random(),
                password : '123456',

            });
            var req = http.request({
                hostname : '127.0.0.1',
                port : '2222',
                path : '/usuario/cadastrar',
                method : 'POST',
                ''
            },function(){

            });
        };
    };
}