
window.onload = function() {
	var results = document.getElementById("result");
	var submitBtn = document.getElementById("randBtn");
	var clearBtn = document.getElementById("clearBtn");
	var resultArray  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,];
	var outputNum = Math.floor(Math.random() * resultArray.length + 1);
	
	submitBtn.addEventListener('click', getRando);
	clearBtn.addEventListener('click', clearResult);

	function clearResult() {
		results.innerHTML = "";
	}

	function getRando() {
		
		results.innerHTML = "<h1>" + outputNum + "</h1>";

	}

}
