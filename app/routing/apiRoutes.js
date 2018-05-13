
//getting data from friends.js
var friends = require("../data/friends.js");

// console.log (friends[0].name);

module.exports = function(app){

//setting route to display json data.
app.get("/api/friends", function(request, response){
    response.json(friends);
});
app.post("/api/friends", function(request, response){
    var newFriend = request.body;



for(var i = 0; i < newFriend.scores.length; i++){
    if(newFriend.scores[i] === "1 (Strongly Disagree)"){
        newFriend.scores[i] =1;
    }else if(newFriend.scores[i] === "5 (Strongly Agree)"){
        newFriend.scores[i] = 5;
    }else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
    }
    console.log(newFriend[0].scores[0]);
}
// needd to see how to grap rsponse from json data


var different = [];
// console.log (different);

for (var i = 0; i < friends.length; i++){
    var compatibleFriend = friends[i];
    var notCompatible = 0;

for(var j = 0; j < compatibleFriend.scores.length; j++){
    var someCompatible = Math.abs(compatibleFriend.scores[j] - newFriend[i].scores[j]);
    notCompatible += someCompatible;
} 
different.push(notCompatible);
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
console.log(newFriends);
response.json(friends[index]);
});
};