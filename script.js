window.onload = function () {
	let quotes = []
	// const endpoint = "https://random-quote-generator.herokuapp.com/api/quotes/";

	// const endpoint ="https://forismatic.com/en/api/";
	// const endpoint="https://talaikis.com/api/quotes/random" ; 
	const endpoint="https://talaikis.com/api/quotes/"

	fetch(endpoint)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				var randomNumber = Math.floor(Math.random() * (data.length));
				var ran = Math.floor(Math.random() * data.length );
				console.log(ran);
				console.log(randomNumber);
				var quote = document.getElementById("quote");
				var author = document.getElementById("author");
				var tweetbutton = document.getElementById("tweetquote");
				quote.textContent = data[randomNumber].quote;
				console.log(quote.textContent)
				author.textContent = data[randomNumber].author;
				tweetbutton.href = "https://twitter.com/intent/tweet/?text=" + data[randomNumber].quote;
				//lie.appendChild(document.createTextNode())			
				quotes = data;
			})
			.catch(function () {
				console.log("error");
			});

	const newQuotebutton = document.querySelector(".new-quote");
	//document.addEventListener("DOMContentLoaded",function(){
	newQuotebutton.addEventListener('click', getQuote);
	

	function getQuote() {
		console.log("newbutton was clicked");
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		console.log(randomNumber);
		var quote = document.getElementById("quote");
		var author = document.getElementById("author");
		var tweetbutton = document.getElementById("tweetquote");
		quote.textContent = quotes[randomNumber].quote;
		author.textContent = quotes[randomNumber].author;
		tweetbutton.href = "https://twitter.com/intent/tweet/?text=" + data[randomNumber].quote;
		//lie.appendChild(document.createTextNode())			
	}
	

	function startDate() {
		var d = new Date();
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		document.getElementById("week").innerHTML = days[d.getDay()] + " | " + [d.getMonth() + 1] + "/" + d.getDate() + "/" + d.getFullYear();
	}



	function startTime() {
		var today = new Date();
		var hour = today.getHours();
		var min = today.getMinutes();
		var sec = today.getSeconds();
		var ms = today.getMilliseconds();
		var ampm = ""
		//	hour = check(hours);
		min = check(min);
		//sec = check(sec);
		if (hour > 12) {
			hour = hour - 12;
			ampm = "PM";

		}
		else if (hour == 12) {
			ampm = "PM";
		}

		else if (hour < 12) {
			ampm = "AM";
		}

		if (hour == 0) {
			hour = 12;
			ampm = "AM";
		}
		document.getElementById("display").innerHTML = hour + ":" + min + ":" + sec + ":" + ms + " " + ampm;
		setTimeout(function () { getTime() }, 500);
	}

	function check(i) {
		if (i < 10)
			i = 0 + i;
		return i;
	}
	startDate();
	startTime();
}


