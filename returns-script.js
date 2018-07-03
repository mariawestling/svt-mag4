function handleInput() {
	console.log("v");
}

function handleReturn() {
	location.href = 'return.html'
}

function scan() {
  document.getElementsByClassName("scan")[0].innerHTML = "Scannar...";
  document.getElementsByClassName("scan")[0].setAttribute("style", "background-color: red;");

	var x = document.querySelectorAll(".item-wrapper");
	var time = 1000;
	for (var i = 0; i < x.length-4; i++) {
		setDelay(x[i],time);
		time+= 1000;
	}
  setTimeout(function(){
    document.getElementsByClassName("scan")[0].setAttribute("style", "");
    document.getElementsByClassName("scan")[0].innerHTML = "Starta scanning";
  }, 5000);
}

function setDelay(div, t) {
  setTimeout(function(){
    div.style.backgroundColor = "#e7f9f7";
    div.getElementsByTagName("i")[1].classList.remove('fa-circle');
    div.getElementsByTagName("i")[1].classList.add('fa-check-circle');
    div.getElementsByClassName("datum")[0].innerHTML = getDate();
  }, t);
}

function getDate() {
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



function saveReturn() {
	var list = document.getElementById("list");
  if(list.innerHTML.includes("fa-circle")){
      swal({
        title: "Föremål saknas",
        text: "Vill du skicka en påminnelse till kund?",
        icon: "warning",
        buttons: ["Nej", "Ja"]
      }).then(() => {
          swal({
            title: "Retur sparad!",
            text: "Påminnelse skickad.",
            icon: "success",
            button: "Ok"
        }).then(()=> { location.href = 'returns.html'});
      })
    }else{
      swal({
        title: "Retur sparad!",
        icon: "success",
        button: "Ok"
      }).then(()=> { location.href = 'returns.html'});
    }

    
  }




function checkOff(id, icon) {
  console.log(id, icon);
  var x = document.getElementById("btn"+id);
  var y = document.getElementById("date"+id);

  var iconTag = x.innerHTML;
  console.log(iconTag.includes("check"));
  var toggle;
  var date;

  toggle = iconTag.includes("check") ? "circle" : "check-circle";
  date = iconTag.includes("check") ? "" : getDate();

  console.log(toggle);

  x.innerHTML = "<i class='far fa-"+ toggle +" status-icon'></i>"
  y.innerHTML = date;

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