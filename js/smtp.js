function senEmail() {
	Email.send({
	    SecureToken : "b3fe399c-7865-49b2-a490-5e1830d801ab",
	    To : 'albertiae.digital@gmail.com',
	    From : document.getElementById("email").value,
	    Subject : document.getElementById("subject").value + " is interested in your services.",
	    Body : "Name: " + document.getElementById("name").value
	    		+ "<br> Last Name: " + document.getElementById("lastname").value
				+ "<br> Email: " + document.getElementById("email").value
				+ "<br> Phone: " + document.getElementById("phone").value
				+ "<br>"
				+ "<br> Message: " + document.getElementById("message").value
	}).then(
	  message => alert("Message sent")
	);
}