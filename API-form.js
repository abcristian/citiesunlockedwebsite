function myFunction(){
	var selection = document.getElementById("selectedItems").value;
	$.post('http://citiesunlockedapitest.azurewebsites.net/data',selection);

}
