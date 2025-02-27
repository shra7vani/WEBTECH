function validateForm() {
    // Get input values
    var fullName = document.getElementById("fullName").value.trim();
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var citizenship = document.getElementById("citizenship").value;
    var aadhar_id = document.getElementById("aadhar_id").value;

    // Clear previous alert messages
    var alertMessage = document.getElementById("alertMessage");
    alertMessage.innerHTML = '';

    // Validate Full Name
    if (!fullName) {
        alertMessage.innerHTML += "Full Name is required.<br>";
        return false;
    }

    // Validate Age (18 years or older)
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        alertMessage.innerHTML += "You must be at least 18 years old.<br>";
        return false;
    }

    // Validate Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alertMessage.innerHTML += "Enter a valid email address.<br>";
        return false;
    }

    // Validate Phone (10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alertMessage.innerHTML += "Phone number must be 10 digits.<br>";
        return false;
    }

    // Validate Citizenship
    if (!citizenship) {
        alertMessage.innerHTML += "Select your citizenship status.<br>";
        return false;
    }

    // Validate Aadhar ID (12 digits)
    if (!/^\d{12}$/.test(aadhar_id)) {
        alertMessage.innerHTML += "Enter a valid 12-digit Aadhar ID.<br>";
        return false;
    }

    // Success message and alert pop-up
    alertMessage.innerHTML = "<strong>Form submitted successfully!</strong><br>";
    alertMessage.style.color = "green";
    alert("Registration Successful! Thank you for registering.");

    return true;
}
