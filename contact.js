// Initialize EmailJS
(function () {
    emailjs.init("dPiWrb9k_-awhiC8h"); // Replace with your EmailJS public key
})();

$(document).ready(function () {
    // Handle form submission
    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const serviceID = "service_q710awi"; // Replace with your EmailJS service ID
        const templateID = "template_vcphz8c"; // Replace with your EmailJS template ID

        // Display the loading message
        $(".loading").show();
        $(".error-message").hide();
        $(".sent-message").hide();

        // Send the form data using EmailJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(function () {
                // Hide loading message and show success message
                $(".loading").hide();
                $(".sent-message").text("Your message has been sent successfully!").show();

                // Reset the form fields
                $("#contactForm")[0].reset();
            })
            .catch(function (error) {
                // Hide loading message and show error message
                $(".loading").hide();
                $(".error-message")
                    .text("Failed to send the message. Please try again.")
                    .show();

                console.error("EmailJS Error:", error); // Log the error for debugging
            });
    });
});
