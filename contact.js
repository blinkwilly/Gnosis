// Initialize EmailJS
(function () {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Use VITE environment variable
})();

$(document).ready(function () {
    // Handle form submission
    $("#contactForm").on("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Use VITE environment variable
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Use VITE environment variable

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
