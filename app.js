const hamburger = document.querySelector(".hamburger");

const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})



const toggle = document.getElementById("toggle");
toggle.addEventListener("change", function () {
    const divs = document.querySelectorAll("div");
    const navbarLinks = document.querySelectorAll("ul#navbarmain li a");
    const logo = document.getElementById("logo1");
    const socialIcons = document.querySelectorAll(".social-icons a"); // Adjust this selector to match your social icon links
    const body = document.body;

    if (this.checked) {
        // Dark mode
        divs.forEach(div => {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        });

        logo.src = "VanillaJS-Hotel_Website/socials/logo-fordark.png";

        // Change navbar text to white
        navbarLinks.forEach(link => {
            link.style.color = "white";
        });

        // Ensure logo is visible

        // Change social media icons color
        socialIcons.forEach(icon => {
            icon.style.color = "white"; // Icons should be visible in white
            if (icon.querySelector("img")) {
                // If the icon is an image, invert the color for dark mode
                icon.querySelector("img").style.filter = "brightness(0) invert(1)";
            }
        });

        // Fix margin/padding issue (white lines)
        body.style.margin = "0";
        body.style.padding = "0";
        body.style.backgroundColor = "black"; // Ensure no white lines are left from body or sections
    } else {
        // Light mode (or default mode)

        logo.src = "VanillaJS-Hotel_Website/socials/logo.png";

        divs.forEach(div => {
            div.style.backgroundColor = "";  // Reset to default
            div.style.color = "";  // Reset to default
        });

        // Reset navbar text to default color
        navbarLinks.forEach(link => {
            link.style.color = ""; // Reset to original
        });

        // Reset social media icons color
        socialIcons.forEach(icon => {
            icon.style.color = ""; // Reset to original color
            if (icon.querySelector("img")) {
                icon.querySelector("img").style.filter = ""; // Remove invert filter for light mode
            }
        });

        // Reset margin/padding issue
        body.style.margin = "";
        body.style.padding = "";
        body.style.backgroundColor = ""; // Reset background color to default
    }
});

$(document).ready(function () {
    $("#btnSubmit").click(function (e) {
        var jsonData = {};

        var formData = $("#myform").serializeArray();

        $.each(formData, function () {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }


        });
        let obj = JSON.stringify(jsonData, null, 2);
        console.log(obj);
        e.preventDefault();
    });
});