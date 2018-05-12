

//getting data from friends.js
var friends = require("./data/friends.js");

//console.log (friends[0].name);

module.exports = function(app){

//setting route to display json data.
app.get("/app/friends.js", function(req, res){
    response.json(friends);
});
app.post("/app/data/friends.js", function(req, res){
    var newFriend = request.body;
//console.log(friends[0].score[0]);
})
//console.log(newFriends);

for(var i = 0; i < newFriend.scores.length; i++){
    if(newFriend.score[i] === "1 (Strongly Disagree)"){
        newFriend.scores[i] =1;
    }else if(newFriend.scores[i] === "5 (Strongly Agree)"){
        newFriend.scores[i] = 5;
    }else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
}


var different = [];

for (var i = 0; i < friends.length; i++){
    var compatibleFriend = friends[i];
    var notCompatible = 0;

for(var f = 0; f < compatibleFriend.scores.length; f++){
    var someCompatible = Math.abs(compatibleFriend.scores[f] - newFriend.scores[f]);
    notCompatible += someCompatible;
}
diff.push(notCompatible);
}
var number = different[0];
var index = 0;

    for(var z = 0; z < different.length; z++){
        if(different[z] < number){
            number = different[z];
        index = z;
    }
}
friends.push(newFriend);
response.json(friends[index]);
};