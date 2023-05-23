function validateForm() {
    // Validate email format
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false;
    }
  
    // Perform additional validation if needed
  
    return true;
  }
  