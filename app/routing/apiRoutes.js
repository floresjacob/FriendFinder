var path = require('path')
var friends = require('../data/friends.js')

module.exports = function(app){

    //get all friends
    app.get('/data/friends', function(req,res){
        res.json(friends)
    })

    //posting a new friend found through survey
    app.post('/data/friends', function(req,res){
        var inputSurvey = req.body

        //user scores
        var userScores = inputSurvey.scores
        //array of score comparisons between friends and user
        var scores = []
        //friend in the array that is the best match according to totalDiff; starts at 0
        var bestFriend = 0

        for(var i = 0; i<friends.length; i++){
            //set totalDiff to 0 to begin survey comparison between user and ppl in array
            var totalDiff = 0
            //compares user scores to potential friend scores
            for(var j = 0; j<userScores.length; j++){
                totalDiff += (Math.abs(parseInt(friends[i].scores[j]))) - parseInt(userScores[j])
            }
            //push difference to array of scores    
            scores.push(totalDiff)
        }
        //start comparisons
        for(var i = 0; i<scores.length; i++){
            //compare scores to each other, and choose the lowest score, 
            //where bestFriend starts at [0] and changes only when another score is lower than it
            if(scores[i] <= scores[bestFriend]){
                bestFriend = i
            }
        }

        //best friend returned as json
        var foundFriend = friends[bestFriend]
        res.json(foundFriend)

        //add user
        friends.push(inputSurvey)
    })


}