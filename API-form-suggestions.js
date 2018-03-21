function myFunction(){
	
	var firstName = $("#firstname").val();
	var lastName = $("#lastname").val();

	var data =
	  {
		  "firstName": firstName,
		  "lastName": lastName,
		  "userLocation": {
		    "latitude": 51.23035107243955,
		    "longitude": -0.34082231277575376
		  },
		  "destLocation": {
		    "latitude": 51.23035107243955,
		    "longitude": -0.34082231277575376
		  }
		}
	



	$.ajax({
	  type: "POST",
	  url: 'http://citiesunlockedapitest.azurewebsites.net/users/inf/3',
	  data: JSON.stringify(data),
	  dataType: "json",
	  beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
	  success: function(response) {
	  	console.log(response);
	  	//window.location = "file:///Users/sonik/Desktop/Cities%20Unlocked%20Presentation%20Website/API-form-suggestions.html";
	  }
	});

}


