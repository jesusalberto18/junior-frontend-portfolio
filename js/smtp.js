function senEmail() {
	Email.send({
	    SecureToken : "8da7e806-3c1d-4c57-992e-3d95ede64f91",
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