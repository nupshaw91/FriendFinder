var friendsInfo = require("../app/data/friends");


app.get("/api/friends", function (req, res) {
    res.json(friendsInfo);
  });


  app.post("/api/friends", function (req, res) {
    
    
        var socialMatch = {
      name: "",
      porfilePic: "",
      friendDifference: Infinity
    };


    
 var newFriend = req.body;
 var newFriendScore = newFriend.scores;


var totalDifference;


for (var i = 0; i < friendsinfo.length; i++) {
  var socialCircle = friendsinfo[i];
  totalDifference = 0;


 
for (var f = 0; f < socialCircle.scores.length; f++) {
var socialCircleScore = socialCircle.scores[f];
var socialCircleScore = newFriendScore[f];


totalDifference += Math.abs(parseInt(socialCircleScore) - parseInt(socialCircleScore));
}
 if(totalDifference <= friendMatch.friendDifference) {
   
   friendMatch.name = socialCircle.name;
   friendMatch.porfilePic = socialCircle.porfilePic;
   socialMatch.friendDifference = totalDifference;
 }


};


    friendsInfo.push(newFriend);

    res.json(socialMatch);
  });

