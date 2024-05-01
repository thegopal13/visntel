document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var formData = new FormData(form);

        fetch("contact.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(result => {
                if (result === "Success") {
                    showNotification("Message sent successfully", "success");
                } else {
                    showNotification("Error: Unable to send message", "error");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                showNotification("Error: Something went wrong", "error");
            });
    });

    function showNotification(message, type) {
        toastr.options = {
            closeButton: false,
            progressBar: true,
            positionClass: "toast-bottom-right",
            showDuration: 300,
            hideDuration: 1000,
            timeOut: 5000,
            extendedTimeOut: 1000,
        };

        toastr.clear(); // Clear any existing toasts


        if (type === "success") {
            toastr.success(message, "", { className: "toast-success" });
        } else {
            toastr.error(message, "", { className: "toast-error" });
        }
    }
});

// ------------- switch between dark and light mode ---------------- //

// Function to toggle between light and dark mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('mode-icon');

    // Toggle the dark mode class
    body.classList.toggle('dark-mode');

    // Toggle the icon
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Save the user's preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
}

// Check if user's preference is stored in localStorage
const isDarkModeSaved = localStorage.getItem('dark-mode');

// Apply the saved preference (if available)
if (isDarkModeSaved === 'true') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

// Update the icon based on the saved preference
const icon = document.getElementById('mode-icon');
if (icon) {
    if (isDarkModeSaved === 'true') {
        icon.classList.add('fa-sun');
    } else {
        icon.classList.add('fa-moon');
    }
}

// Add event listener to the mode toggle button
const modeToggle = document.getElementById('mode-toggle');
if (modeToggle) {
    modeToggle.addEventListener('click', toggleDarkMode);
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the collapse element
    var navbarCollapse = document.getElementById('navbarNav');

    // Add an event listener to the collapse element for the 'show.bs.collapse' event
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        // When the menu is about to be shown, add an event listener to the menu items
        var menuItems = document.querySelectorAll('.nav-item');
        menuItems.forEach(function (menuItem) {
            menuItem.addEventListener('click', function () {
                // When a menu item is clicked, close the menu
                $('#navbarNav').collapse('hide');
            });
        });
    });
});


let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let porogressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }
    else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#1F1F1F ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


$('.owl-carousel.testimonial').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 8000,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

window.addEventListener('load', () => {
    AOS.init({
        duration: 500,
        easing: 'fade-up',
        once: true,
        mirror: false
    })
});


// ---------------- preloader -------------------- //

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done', function () {
    $('.p').delay(500).animate({ top: '30%', opacity: '0' }, 3000, $.bez([0.19, 1, 0.22, 1]));


    $('#preloader').delay(1500).animate({ top: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));

    TweenMax.from(".title", 2, {
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    })
});



function rotateIcon(iconId) {
    const icon = document.getElementById(iconId);
    icon.classList.toggle('rotated');
}

//   ------------- numbers counter -----------------//

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1200,
    });
});
