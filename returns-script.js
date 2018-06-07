function handleInput() {
	console.log("v");
}

function handleReturn() {
	location.href = 'return.html'
}

function scan() {
	var x = document.querySelectorAll(".scan-item");
	var time = 1000;
	for (var i = 0; i < x.length; i++) {
		setDelay(x[i],time);
		time+= 1000;
	}
}

function setDelay(div, t) {
  setTimeout(function(){
    div.style.backgroundColor = "lightblue";
    div.getElementsByTagName("i")[0].classList.remove('fa-times-circle');
    div.getElementsByTagName("i")[0].classList.add('fa-check-circle');
  }, t);
}

function check() {
	
}