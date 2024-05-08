// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Realtime Database
  const database = firebase.database();
  
  // Get references to HTML elements
  const moistureValueElement = document.getElementById('moistureValue');
  const wateringStatusElement = document.getElementById('wateringStatus');
  const tankLevelElement = document.getElementById('tankLevel');
  
  // Function to fetch and update data from Firebase
  function updateDataFromFirebase() {
    database.ref('/').once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        moistureValueElement.innerText = data.moistureValue || 'N/A';
        wateringStatusElement.innerText = data.wateringStatus === 1 ? 'ON' : 'OFF';
        tankLevelElement.innerText = data.tankLevel || 'N/A';
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Initial update when the page loads
  updateDataFromFirebase();
  
  // Set interval to update data every 5 seconds (5000 milliseconds)
  setInterval(updateDataFromFirebase, 5000);
// Get all the Show More buttons
const showMoreButtons = document.querySelectorAll('.show-more-btn');

// Add click event listener to each button
showMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log("button clicked.")
        // Get the target page URL from the button's data attribute
        const targetPage = this.getAttribute('data-target');
        console.log("Target page:", targetPage);
        // Redirect to the target page
        window.location.href = targetPage;
    });
});
  