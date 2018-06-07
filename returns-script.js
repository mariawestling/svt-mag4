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
    div.style.backgroundColor = "#e7f9f7";
    div.getElementsByTagName("i")[0].classList.remove('fa-circle');
    div.getElementsByTagName("i")[0].classList.add('fa-check-circle');
    div.getElementsByClassName("datum")[0].innerHTML = date();
  }, t);
}

function date() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = yyyy +'-' + mm + '-' + dd;
	return today;
}



function showItems() {
      var x = document.getElementById('renting-items');
      x.className = x.className.replace("hidden", "");

      var y = document.getElementById('other-damages');
      y.className = x.className.replace("hidden", "");
    }

    function companyChoice(company) {
      var compButton = document.getElementById('companyButton');
      compButton.placeholder = compButton.placeholder.replace("Välj företag...", company);
      console.log(compButton.placeholder);
    }

    function productionChoice(prodnr) {
      var prodButton = document.getElementById('productionButton');
      prodButton.placeholder = prodButton.placeholder.replace("Välj produktion...", prodnr);
    }

    function contactChoice(contact) {
      var contButton = document.getElementById('contactButton');
      contButton.placeholder = contButton.placeholder.replace("Välj kontaktperson...", contact);
    }

    function addManually() {
      swal({
        title: "Lägg till objekt manuellt",
        text: "Alla parametrar för att lägga till objekt ska in här.",
        button: "Avbryt"
      })
    }

    function allRenting(){
      var hides = document.getElementById('showAll');
      hides.className += ' hidden';

      var show = document.getElementById('allRents');
      show.className = show.className.replace(" hidden", "");

      var companyDets = document.getElementById('companyDetails');
      companyDets.className += " hidden";

      toggleSelected();
    }

    function handleClick(whereTo) {
      location.href = whereTo;
    }

    function oneRenting() {
    	location.href = 'renting.html';
      // var oneRents = document.getElementById('showAll');
      // oneRents.className = oneRents.className.replace(" hidden", "");

      // var hideRents = document.getElementById('allRents');
      // hideRents.className += " hidden";

    }

    function saveFoljesedel() {
      $("#allFolje").click();
      toggleSelected();
    }

    function toggleSelected() {
      var butt1 = document.getElementById('oneFolje');
      butt1.className = butt1.className.replace(" active", "");

      var butt2 = document.getElementById('allFolje');
      butt2.className += " active";
    }

    function instructionButton() {
      swal({
        title: "Instruktioner",
        text: "Här är tanken att det ska finnas instruktioner att söka på gällande processen"
      })
    }