document.getElementsByClassName("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Define the predefined username and password
    const predefinedUsername = "Vaibhav";
    const predefinedPassword = "Vaibhav123@";
    
    // Get the entered username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if the entered username and password match the predefined values
    if(username === predefinedUsername && password === predefinedPassword) {
      // If the credentials are correct, show a pop-up message
      alert("Login successful!");
      // Redirect to another page
      window.location.href = "index.html";
    } else {
      // If the credentials are incorrect, display an error message
      alert("Invalid username or password. Please try again.");
    }
  });
  