function validateLogin() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var successMessage = document.getElementById('success-message');

  // List of valid user IDs and passwords
  var users = {
    "bommalibheemateja.22.csd@anits.edu.in": "anits123",
    "akisaisuryakamaltarun.22.csd@anits.edu.in": "anits123",
    "mandapatirohitvarma.22.csd@anits.edu.in": "anits123",
    "rellimadhu.22.csd@anits.edu.in": "anits123",
    "siddanathiroopeshvenkatganesh.22.csd@anits.edu.in": "anits123",
    "marridurgaprasad.22.csd@anits.edu.in": "anits123",
    "velugubantlapraveenkumar.22.csd@anits.edu.in": "anits123",
    "undelarajasekharreddy.22.csd@anits.edu.in": "anits123",
  };

  // Check if the entered username is in the list and the password matches
  if (users.hasOwnProperty(username) && password === users[username]) {
    // Check if the logged-in user is "bommalibheemateja.22.csd@anits.edu.in"
    if (username === "bommalibheemateja.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551072/72.html";
    }, 3000);
    }
    if (username === "akisaisuryakamaltarun.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551067/67.html";
    }, 3000);
    }
    if (username === "mandapatirohitvarma.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551092/92.html";
    }, 3000);
    }
    if (username === "marridurgaprasad.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551094/94.html";
    }, 3000);
    }
    if (username === "rellimadhu.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551107/107.html";
    }, 3000);
    }
    if (username === "siddanathiroopeshvenkatganesh.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551114/114.html";
    }, 3000);
    }
    if (username === "undelarajasekharreddy.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      showSuccessMessage();
      setTimeout(function () {
      window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551122/122.html";
    }, 3000);
    }
    if (username === "velugubantlapraveenkumar.22.csd@anits.edu.in") {
      // Redirect to A22126551072.html
      // Show success message and wait for 3 seconds before redirecting
      showSuccessMessage();
      setTimeout(function () {
        window.location.href = "file:///C:/Users/Tejab/Desktop/Folder/DTPI_Webpage/A22126551125/125.html";
      }, 3000);      
    }

    else {
      // Show success message and wait for 3 seconds before redirecting
      showSuccessMessage();
      setTimeout(function () {
        // window.location.href = "Home/Home.html";
      }, 3000);
    }

    return false; // Prevent the form from submitting
  } else {
    alert("Invalid username or password. Please try again.");
    return false;
  }
}

function showSuccessMessage() {
  // Show the dim overlay
  document.querySelector('.dim-overlay').style.display = 'block';

  // Show the success message
  var successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';

  // Wait for 3 seconds and then hide the success message and overlay
  setTimeout(function () {
    successMessage.style.display = 'none';
    document.querySelector('.dim-overlay').style.display = 'none';
  }, 3000);
}
