document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    
    // Validation patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;
    
    // Fields
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    const address = document.getElementById("address");
    const message = document.getElementById("message");
    const cv = document.getElementById("cv");
    const terms = document.getElementById("terms");
    
    // Error spans
    const fullNameError = document.getElementById("fullNameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    
    // Validation logic
    if (!namePattern.test(fullName.value)) {
        fullNameError.classList.remove("hidden");
        isValid = false;
    } else {
        fullNameError.classList.add("hidden");
    }
    
    if (!emailPattern.test(email.value)) {
        emailError.classList.remove("hidden");
        isValid = false;
    } else {
        emailError.classList.add("hidden");
    }
    
    if (!phonePattern.test(phone.value)) {
        phoneError.classList.remove("hidden");
        isValid = false;
    } else {
        phoneError.classList.add("hidden");
    }
    
    if (!gender.value || !city.value || !state.value || !country.value || !address.value || !message.value) {
        alert("All fields are required.");
        isValid = false;
    }
    
    if (!cv.files[0] || !cv.files[0].name.match(/\.(pdf|doc|docx)$/)) {
        alert("Please upload a valid CV in .pdf, .doc, or .docx format.");
        isValid = false;
    }
    
    if (!terms.checked) {
        alert("You must agree to the terms and conditions.");
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("userForm").reset();
    }
});
