// Validate the form before submitting it
function validateForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone_number").value;
  
    // Check if all the fields are filled in
    if (username === "" || password === "" || email === "" || phoneNumber === "") {
      alert("Please fill in all the fields.");
      return false;
    }
  
    // Check if the email address is valid
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if the phone number is valid
    if (!/^\d+$/.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    // If all the fields are valid, submit the form
    return true;
  }
  
  // Add an event listener to the form's submit button
  document.getElementById("signup_form").addEventListener("submit", validateForm);
// Validate the form before submitting it
function validateForm() {
    // Get the values of the input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone_number").value;
  
    // Check if all the fields are filled in
    if (username === "" || password === "" || email === "" || phoneNumber === "") {
      alert("Please fill in all the fields.");
      return false;
    }
  
    // Check if the email address is valid
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Check if the phone number is valid
    if (!/^\d+$/.test(phoneNumber)) {
      alert("Please enter a valid phone number.");
      return false;
    }
  
    // If all the fields are valid, submit the form
    return true;
  }
  
  // Add an event listener to the form's submit button
  document.getElementById("signup_form").addEventListener("submit", validateForm);
    