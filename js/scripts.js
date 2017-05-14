function my(event) {

	oblicz(event);


}

function oblicz(event) {

	//define variables for time and date	
	var currentDate = new Date(),
		day = currentDate.getDate(),
		month = currentDate.getMonth() + 1,
		year = currentDate.getFullYear(),
		hours = currentDate.getHours(),
		minutes = currentDate.getMinutes();

	if (minutes < 10) {
		minutes = "0" + minutes;
	}


	//take input field 
	var wplata = parseInt(document.getElementById("inputEUR").value);

	//create div 1, set id and put string to it
	var createDiv1 = document.createElement("div");
	createDiv1.setAttribute("id", "div1");
	createDiv1.innerHTML = "PLN amount";

	//create div 2 set id to it and count the input field * converting course
	var createDiv2 = document.createElement("div");

	//set id to it 
	createDiv2.setAttribute("id", "div2");

	// count the input field * converting course
	createDiv2.innerHTML = wplata * 4, 2 * (1 + (Math.floor((Math.random() * 100) + 1) * 50) / 1000);

	//create div 3 
	var createDiv3 = document.createElement('div');

	//set id to div3
	createDiv3.setAttribute("id", "div3");

	//put image + date and time to div3
	createDiv3.innerHTML = "<img src='img/clock.png' id='clock'>" + "   " + year + "." + month + "." + day + " " + hours + ":" + minutes;

	//append three divs to the div with #mainDiv
	document.getElementById("mainDiv").appendChild(createDiv1);
	document.getElementById("mainDiv").appendChild(createDiv2);
	document.getElementById("mainDiv").appendChild(createDiv3);


}