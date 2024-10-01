function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}
// Function to check if an email was sent this month
function isEmailSentThisMonth() {
    const lastSentDate = localStorage.getItem('lastEmailSent');
    if (lastSentDate) {
        const currentDate = new Date();
        const lastSent = new Date(lastSentDate);

        // Check if the email was sent in the current month
        return currentDate.getFullYear() === lastSent.getFullYear() && 
               currentDate.getMonth() === lastSent.getMonth();
    }
    return false;
}

// Select the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const responseMessageDiv = document.getElementById('response-message'); // Message display area
    responseMessageDiv.className = ''; // Clear previous message

    if (isEmailSentThisMonth()) {
        responseMessageDiv.textContent = 'You can only send one message per month. Please try again next month.';
        responseMessageDiv.classList.add('error'); // Add error class
        return;
    }

    // Send email using EmailJS
    emailjs.sendForm('service_8w21sin', 'template_6jwswnm', this)
        .then(function(response) {
            responseMessageDiv.textContent = 'Message Sent Successfully!';
            responseMessageDiv.classList.add('success'); // Add success class
            // Store the current date in local storage
            localStorage.setItem('lastEmailSent', new Date());
            // Optionally, reset the form
            document.getElementById('contact-form').reset();
        }, function(error) {
            responseMessageDiv.textContent = 'Failed to send message. Please try again.';
            responseMessageDiv.classList.add('error'); // Add error class
        });
});

// Initialize EmailJS with your User ID
emailjs.init("ApKo1xfV9bTotqIIO"); // Replace with your actual User ID


-----------------------------------------------------
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjZp_GPz6xCOHTG9MLkswoA4WC8cUSXeI",
    authDomain: "portfolio-web-4a785.firebaseapp.com",
    projectId: "portfolio-web-4a785",
    storageBucket: "portfolio-web-4a785.appspot.com",
    messagingSenderId: "383613185126",
    appId: "1:383613185126:web:85ecba72c8541fe53411a7",
    measurementId: "G-LT4VP3CR7K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>