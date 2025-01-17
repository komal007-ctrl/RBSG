// Script for controlling the header opacity as the user scrolls
document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY; // Get the number of pixels the user has scrolled
    const maxOpacity = 1; // Maximum opacity value
    const minOpacity = 0.7; // Minimum opacity value
    const opacity = Math.max(minOpacity, maxOpacity - scrollTop / 500); // Reduce opacity based on scroll position
    header.style.opacity = opacity; // Set the header opacity
});

// Script for handling the form submission (optional)
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation to ensure fields are filled
    if (name && email && message) {
        console.log("Form Submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Show a success message (or any other logic)
        alert("Thank you for contacting us! We'll get back to you soon.");

        // Optionally reset the form fields
        document.getElementById('contact-form').reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

// You could add any other functionality here as needed, such as event listeners for other page interactions.
