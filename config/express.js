var express = require('express');
var load = require('express-load');

module.exports = function () {
    var app = express();
    app.set('port', 3000);//configuração de variaveis de ambiente porta servidor

    app.set('view engine', 'ejs');//configuração de variaveis de ambiente informar a enginemda view
    app.set('views', './app/views');//configuração de variaveis de ambiente define diretorio onde ficara nosasa views

    app.use(express.static('./public'));//middleware

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}