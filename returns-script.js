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
      var oneRents = document.getElementById('showAll');
      oneRents.className = oneRents.className.replace(" hidden", "");

      var hideRents = document.getElementById('allRents');
      hideRents.className += " hidden";

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