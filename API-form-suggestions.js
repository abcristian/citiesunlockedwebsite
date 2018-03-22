function myFunction(){
	
	var firstName = $("#firstname").val();
	var lastName = $("#lastname").val();

	const users = [{"firstName":"ttt","lastName":"test"},{"firstName":"abc","lastName":"test"},{"firstName":"def","lastName":"test"},{"firstName":"Rick","lastName":"Clarke"},{"firstName":"Rick","lastName":"Clarke"},{"firstName":"Richard","lastName":"Clarke"},{"firstName":"Richard","lastName":"Clarke"},{"firstName":"Richard","lastName":"Clarke"},{"firstName":"Richard","lastName":"Clarke"},{"firstName":"dc","lastName":"d"},{"firstName":"dsads","lastName":"sdada"}]

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
	


	for(const user in users) {
		data["firstName"] = user.firstName
		data["lastName"] = user.lastName
		$.ajax({
		  type: "POST",
		  url: 'http://citiesunlockedapitest.azurewebsites.net/users/inf/3',
		  data: JSON.stringify(data),
		  dataType: "json",
		  beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json');},
		  success: function(response) {
		  	console.log(response.length ? response : user);
		  	//window.location = "file:///Users/sonik/Desktop/Cities%20Unlocked%20Presentation%20Website/API-form-suggestions.html";
		  }
		});
	}
	

}


