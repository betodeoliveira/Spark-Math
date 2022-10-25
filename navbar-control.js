	var loggedOutLinks = document.getElementById("navbar-logged-out-links");
  var loggedInLinks = document.getElementById("navbar-logged-in-links");
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");;
  
  if(window.location.href.indexOf("/dashboard") > -1) {
  	sessionStorage.setItem("isLoggedIn", "true");
  	loggedOutLinks.style.display = "none";
  	loggedInLinks.style.display = "block";
	}
  else if(isLoggedIn == "true") {
  	loggedOutLinks.style.display = "none";
  	loggedInLinks.style.display = "block";
  }
  else {
  	loggedOutLinks.style.display = "block";
  	loggedInLinks.style.display = "none";
  }
