// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// var app = express();
var friends = require("../data/friends");


module.exports = function(app){

app.get("/data/friends", function(req, res){
	res.json(friends);
});


app.post("/data/friends", function(req, res){
	var scoreDiff = [];
	var newFriend = req.body;
	var friendScores = newFriend.scores;	
	var friendLength = friendScores.length;
	console.log(friendScores);
  		console.log(friendLength);
//check to see if all scores are 0-5
	// for (var i = 0; i < friendLength; i++){

	// 	var score = friendScores[i];
	// 	score = Number(score);
	// 	if (score<=5 && score>=0){
	// 				// if (score){
	// 			// console.log(score);
	// 		} else {
	// 			res.json(false);
	// 			// res.end();
	// 		 // res.json(friends);
	// 	};	
	// }; //end for

	//cycle through the existing friends json
	for (var i=0; i<friends.length; i++){
		var dbFriend = friends[i];
		var dbFriendScores = dbFriend.scores;
		var sumDiff = 0;
		// console.log(dbFriendScores);

		//cycle through and compare the scores
		for (var j = 0; j<dbFriendScores.length; j++){
			var dbScore = Number(dbFriendScores[j]);
			var newScore = Number(friendScores[j]);

			var difference = dbScore - newScore;
			difference = Math.abs(difference);	
			sumDiff += difference;

		};//end "j" loop
		// console.log(sumDiff);
		//add the sum of the differences to the scoreDiff array to store
		scoreDiff.push(sumDiff);
		console.log(scoreDiff);
	}; //end "i" loop

var scoreMin = lowestDiff(scoreDiff);
console.log(scoreMin);
var friendsIndexes = allIndexes(scoreDiff, scoreMin);

console.log(friendsIndexes);

var yourFriends = returnFriends(friendsIndexes);

console.log(yourFriends);

friends.push(req.body);
	  res.json(yourFriends);
});
};//end modules.export




var lowestDiff = function (array){
	var lowest = 100;

	for (var i=0; i<array.length; i++){
		var possible = Number(array[i]);
		if(lowest <= possible){
	
		}else {
			lowest = possible;
		};
	
	};
	return lowest;
};

var allIndexes = function (arr, val) {
	var indexes = [];
    for(var i = 0; i < arr.length; i++){
    	var arrNumber = parseInt(arr[i]);
        if (arrNumber === val)
            indexes.push(i);
    };
	// if (indexes.length==1){
	// 	// var index = indexes[0];
	// 	// console.log(friends[index]);
	// } else {
	// 	//enter code for adding all the friends with lowest score 

	// 	// console.log(indexes);
	// };
	return indexes;
};

var returnFriends = function (arr) {
	var results =[];
	for (var i=0; i<arr.length; i++){	
		var index = arr[i];
		results.push(friends[index]);
	};
	return results;
};




