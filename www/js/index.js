$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    random();
  });            
});            


function randomNumber() {
	var text = $('#textinput').val();
	alert(text);
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 

}


function random() {
	
	//return Math.floor(Math.random() * 10);
 if random() == true {
	
	navigator.notification.beep(1);
	 
 }
	return !Math.round(Math.random());
	//alert(text);
	
}

