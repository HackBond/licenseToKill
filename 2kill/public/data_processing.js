var rand_heartrate = new Array(1000);

for (var i = rand_heartrate.length - 1; i >= 0; i--) {
	rand_heartrate[i] = Math.random()*20 + 100;
};


function heart_rate_avg(last_ten_heartbeats){

	var sum = 0;

	for (var i = last_ten_heartbeats.length - 1; i >= 0; i--) {
		sum = sum + last_ten_heartbeats[i];
	};

	sum = sum/last_ten_heartbeats.length;

	return sum;
}

function heart_rate_response(last_ten_avg){

	if(last_ten_avg == 0)
		return "Dead";
	else if(last_ten_avg > 50 && last_ten_avg < 90)
		return "Stable";
	else if(last_ten_avg > 90 && last_ten_avg < 160)
		return "Active";
	else
		return "Poisoned";
}

function process_last_ten(long_array){

	var x = new Array(10);


	for (var i =  long_array.length-1; i > long_array.length - 11; i--) {
		x[long_array.length - i - 1] = long_array[i];
	};

	return heart_rate_response(heart_rate_avg(x));
}

console.log(heart_rate_avg(rand_heartrate));
console.log(process_last_ten(rand_heartrate));

/*
function monitor() {
	the_array = rand_heartrate 
	setInterval {		
		the_array.push(new_measurement)
		process_last_ten(the_array)
		wait 
	}

}
*/