'use strict';


function randomElem(arr){
	var n = Math.floor(Math.random() * (arr.length));
	return arr[n];
}



function show(){
	document.getElementById("table").hidden = true;
	document.getElementById("repeat").hidden = false;
	var a = document.getElementsByClassName('symbol');
	var x = document.getElementById("blackQuad");
	x.textContent = a[18].textContent;
}


function repeat(){
	document.getElementById("repeat").hidden = true;
	document.getElementById("table").hidden = false;
	var x = document.getElementById("blackQuad");
	x.textContent = '';
	magic();
}



function magic(){
	var a = document.getElementsByClassName('symbol');
	var symbols = ['m', 'n', 'u', 'w', 'y', 't', 'M', 'A', '{', '}', ')', '(', 'r', 'c', 'U'];
	var char = randomElem(symbols);
	for (var i = 0; i < a.length; i++){
		if (!(i%9) && i !== 0 && i !== 9) {
			a[i].textContent = char;
		} else {
			a[i].textContent = randomElem(symbols);
		}
	}
}




document.getElementById("repeat").hidden = true;
magic();



