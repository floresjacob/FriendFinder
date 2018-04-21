var path = require('path')

module.exports = function(app) {
    //send user home
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })

    //send user to survey
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '..public/survey.html'))
    })

}