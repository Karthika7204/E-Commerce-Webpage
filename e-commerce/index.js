// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the menu toggle button
    var menuToggle = document.querySelector(".navbar-menu-toggle");
    var sideNavbar = document.querySelector(".side-navbar");

    menuToggle.addEventListener("click", function() {
        // Toggle the display of the side navbar
        sideNavbar.style.left = "0";
    });

    // Select the xbar 
    var xbar = document.querySelector(".x-bar");

    xbar.addEventListener("click", function() {
        sideNavbar.style.left = "-60%";
    });

});
