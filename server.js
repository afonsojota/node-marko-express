const app = require('./src/config/custom_express');

app.listen(3000, function(){
    console.log('Servidor rodando')
})

const http = require('http');