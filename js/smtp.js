function senEmail() {
	Email.send({
	    SecureToken : "",
	    To : 'albertiae.digital@gmail.com',
	    From : document.getElementById("email").value,
	    Subject : "Subject:", document.getElementById("subject").value,
	    Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
}