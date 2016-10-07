var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656! I am Jessie');
});

app.get('/nickname', function(request, response){
    response.send('amused-wolf');
});

app.listen(process.env.PORT || 4000);