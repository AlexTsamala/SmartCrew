 
document.addEventListener("DOMContentLoaded", function() {
    const inputForms = document.querySelectorAll('.input-form');
    const form = document.getElementById('input-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    form.addEventListener('submit', function(event) {
      let hasError = false;
  
      if (emailInput.value.trim() === '') {
        emailError.style.display = 'block';
        hasError = true;
      } else {
        emailError.style.display = 'none';
      }
  
      if (passwordInput.value.trim() === '') {
        passwordError.style.display = 'block';
        hasError = true;
      } else {
        passwordError.style.display = 'none';
      }
  
      if (hasError) {
        event.preventDefault();
        inputForms.forEach(inputForm => {
          inputForm.style.border = '1px solid red';
        });
      } else {
        inputForms.forEach(inputForm => {
          inputForm.style.border = 'none';
        });
      }
    });
  
     
  });
  document.addEventListener("DOMContentLoaded", function() {
      const socialLinks = document.querySelectorAll(".social-link");
      const copyLinkMessage = document.querySelector(".copy-link");
    
      socialLinks.forEach(link => {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          
          // Display the "Copy link" message
          copyLinkMessage.style.display = "flex";
          
          // Hide the "Copy link" message after 2 seconds (adjust as needed)
          setTimeout(function() {
            copyLinkMessage.style.display = "none";
          }, 2000);
        });
      });
    });