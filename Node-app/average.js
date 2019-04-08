function average(scores){
	var total=0;
	scores.forEach(function(score){
		total+=score;
	})
	var avg =total/scores.length;
	return Math.round(avg);
}


var scores = [90,95,95,92,94];
console.log(average(scores));