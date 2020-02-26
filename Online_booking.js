function eval(){
    
   

    var last_name = document.getElementById("last_name").value;
    var first_name = document.getElementById("first_name").value;
    var destination = document.getElementById("destination").value;
    var gender = document.getElementById("gender").value;
    var origin = document.getElementById("origin").value;
    var email = document.getElementById("email").value;
    var d_date = document.getElementById("departure_date").value;
    var r_date = document.getElementById("return_date").value;
    
if (last_name == 0 || first_name == 0 || destination == 0 || gender == 0 || origin == 0 || email == 0 || !Date.parse(d_date) || !Date.parse(r_date)){
    alert("All fields must be filled up!");
}

else {
	var checker = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!checker.test(email)) {
	    alert('Enter a valid email address!');
	 	}
	else
	{
		if(d_date>r_date){
			alert("Enter a valid departure/return date!");  
			}

		else if (d_date<=r_date)
		{
		alert("Your booking information has been set. Please check your email for your payment details.");
		}
	}
}

}