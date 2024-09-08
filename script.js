function animateTransition() {
    const logo = document.querySelector('.logo'); // Select the logo element
    const imageSection = document.querySelector('.image-section'); // Select the image section
    const loginForm = document.querySelector('.login-form'); // Select the login form
    const container = document.querySelector('.container'); // Select the main container
    const image = imageSection.querySelector('img'); // Get the house image within the image section

    // Step 1: Hide the form
    loginForm.classList.add('hide-form'); // Add a class to hide the login form

    // Step 2: Center the logo immediately
    logo.classList.add('centered-logo'); // Add a class to center the logo

    // Step 3: Start the image shrinking
    image.classList.add('login-image-shrink'); // Add a class to shrink the image

    // Change background color
    setTimeout(() => {
        container.style.backgroundColor = '#ffffff'; // Change background color to white
        
        // Step 4: Logo stays centered for a brief moment before shrinking
        setTimeout(() => {
            // Remove centering for smooth return
            logo.classList.remove('centered-logo'); // Remove the centering class from the logo
            logo.classList.add('return-logo'); // Add a class to animate the logo back to its original position

            // Step 5: Expand the image after a shorter pause
            setTimeout(() => {
                // Remove the class that shrinks the image
                image.classList.remove('login-image-shrink'); // Remove the shrinking effect from the image
                image.classList.add('login-image-expand'); // Add a class to expand the image

                // Step 6: Show the login form after the image has expanded
                setTimeout(() => {
                    loginForm.classList.remove('hide-form'); // Remove the hide class to show the form
                    loginForm.classList.add('show-form'); // Add a class to transition the form into view
                }, 500); // Wait for the image expansion to complete

            }, 500); // Delay for the logo action timing

        }, 500); // Delay before moving the logo back
                
    }, 1500); // Initial delay for background change
}
