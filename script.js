document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission refresh

    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic Validation
    if(name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate Success
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    
    // Clear Form
    document.getElementById('contactForm').reset();
});
