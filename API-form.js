function myFunction(){
	var selection1 = $("#selectedItems1").val();
	var selection2 = $("#selectedItems2").val();
	var selection3 = $("#selectedItems3").val();
	var firstName = $("#firstname").val();
	var lastName =  $("#lastname").val();
	/*
	console.log(JSON.stringify(selection).replace(/,/gi, ' '));
	console.log(firstName);
	*/

	var selection = (
					 JSON.stringify(selection1).replace(/,/gi, ' ') + 
					 JSON.stringify(selection2).replace(/,/gi, ' ') + 
					 JSON.stringify(selection3).replace(/,/gi, ' ')
					 ).replace("][", ',').replace("][", ',');
	console.log(selection);
	
	var data = {
	  "firstName": firstName,
	  "lastName": lastName,
	  "data": JSON.parse(selection),
	  "options": {
	    "batchSize": 100,
	    "alpha": 5,
	    "beta": 0.01,
	    "iterations": 1000
	  			 }
	}



	$.ajax({
	  type: "POST",
	  url: 'http://citiesunlockedapitest.azurewebsites.net/users',
	  data: JSON.stringify(data),
	  dataType: "json",
	  beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
	  success: function(data) {
	  	console.log(data);
	  	window.location = "file:///Users/sonik/Desktop/Cities%20Unlocked%20Presentation%20Website/API-form-suggestions.html";
	  }
	});

}

