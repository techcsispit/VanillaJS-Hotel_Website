const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});

const toggle = document.getElementById("toggle");
toggle.addEventListener("change", function () {
    const divs = document.querySelectorAll("div");
    const navbarLinks = document.querySelectorAll("ul#navbarmain li a");
    const logo = document.getElementById("logo1");
    const socialIcons = document.querySelectorAll(".social-icons a");
    const body = document.body;

    if (this.checked) {
        // Dark mode
        divs.forEach(div => {
            div.style.backgroundColor = "black";
            div.style.color = "white";
        });

        logo.src = "VanillaJS-Hotel_Website/socials/logo-fordark.png";

        navbarLinks.forEach(link => {
            link.style.color = "white";
        });

        socialIcons.forEach(icon => {
            icon.style.color = "white";
            if (icon.querySelector("img")) {
                icon.querySelector("img").style.filter = "brightness(0) invert(1)";
            }
        });

        body.style.margin = "0";
        body.style.padding = "0";
        body.style.backgroundColor = "black";
    } else {
        // Light mode
        logo.src = "VanillaJS-Hotel_Website/socials/logo.png";

        divs.forEach(div => {
            div.style.backgroundColor = "";
            div.style.color = "";
        });

        navbarLinks.forEach(link => {
            link.style.color = "";
        });

        socialIcons.forEach(icon => {
            icon.style.color = "";
            if (icon.querySelector("img")) {
                icon.querySelector("img").style.filter = "";
            }
        });

        body.style.margin = "";
        body.style.padding = "";
        body.style.backgroundColor = "";
    }
}); // Added missing closing bracket here

const dropdown = document.querySelectorAll('.foodbox img');

dropdown.forEach((item) => {
    item.addEventListener("click", () => {
        const foodDesc = item.nextElementSibling; // Renamed to avoid conflict
        foodDesc.classList.toggle("show");
    });
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
