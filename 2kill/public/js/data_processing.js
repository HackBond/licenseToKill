//Ario Aliabadi
//asa215@ic.ac.uk

//Some functions to analyse the data coming in form the biometrics on
//the agent's person.


//Random array of numbers which supposedly simmulate the heart rate 
//of the agent.

var rand_heartrate = new Array(1000);

for (var i = rand_heartrate.length - 1; i >= 0; i--) {
	rand_heartrate[i] = Math.random()*20 + 100;
};


//Calculates the average of the elements of an array.
function heart_rate_avg(last_ten_heartbeats){

	var sum = 0;

	for (var i = last_ten_heartbeats.length - 1; i >= 0; i--) {
		sum = sum + last_ten_heartbeats[i];
	};

	sum = sum/last_ten_heartbeats.length;

	return sum;
}


//Outputs the current status of the agent bassed on their heart rate.
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

//Calculates the average of the last n data points in long_array and
//returns the appropriate message from heart_rate_response().
function process_last_n(long_array, n){

	var last_n = new Array(n);

	for (var i =  long_array.length-1; i > long_array.length - 1 - n; i--) {
		last_n[long_array.length - i - 1] = long_array[i];
	};

	return heart_rate_response(heart_rate_avg(last_n));
}


//Calculates the rate of change between the latest and the nth last 
//data point in long_array.
function rate_of_change(long_array, n){

	var last_n = new Array(n);

	for (var i = long_array.length - 1; i > long_array.length - n - 1; i--) {
		last_n[long_array.length - 1 - i] = long_array[i];	
	};

	return (last_n[n-1]/last_n[0] - 1)*100;
}


//Prints the status of the agent in a trickle down basis.
function monitor(){

for(var k = 0; k < 2000000000; k += 1)
	{
		if(k % 200000000 == 0)
		sampler();
	}

	
}



function sampler () {
	rand_heartrate.push(Math.random()*20 + 100);
	console.log(process_last_ten(rand_heartrate));
}

monitor();


//console.log(heart_rate_avg(rand_heartrate));
//console.log(process_last_ten(rand_heartrate));

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