$(document).ready(function () {
    $(".hamburger").click(function () {
        $("#mobileMenu").toggleClass("active");
    });

    $(".tab").click(function () {
        let tabId = $(this).data("tab");

        $(".tab").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");
        $("#" + tabId).addClass("active");
    });

    $(".demo").click(function (e) {
        e.preventDefault();
        $("#demoPopup").addClass("active");
    });

    // Close popup
    $(".close-btn").click(function () {
        $("#demoPopup").removeClass("active");
    });

    // Submit form
    $("#demoForm").submit(function (e) {
        e.preventDefault();

        // $("#demoForm").hide();
        $(this).find(".success-msg").fadeIn();;
        this.reset(); // ✅ reset form
    });
    $("#phone").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $("#contactForm").submit(function (e) {
        e.preventDefault();
        let phone = $("#contactPhone").val().replace(/\D/g, '');

        if (phone.length !== 10) {
            $(".error-msg").fadeIn();
            return;
        } else {
            $(".error-msg").hide();
        }
        // $("#contactForm").hide();
        $(this).find(".success-msg").fadeIn();
        this.reset(); // ✅ reset form
    });
    $(".toggle-btn").click(function () {
        let form = $(this).data("form");

        $(".toggle-btn").removeClass("active");
        $(this).addClass("active");

        $(".auth-form").removeClass("active");
        $("#" + form + "Form").addClass("active");
    });

    // Signup Validation
    $("#signupForm").submit(function (e) {
        e.preventDefault();

        let phone = $("#signupPhone").val().replace(/\D/g, '');

        if (phone.length !== 10) {
            alert("Enter valid 10-digit phone number");
            return;
        }

        // $(".auth-form").hide();
        $(this).find(".success-msg").fadeIn();
        this.reset(); // ✅ reset form
    });

    // Login Submit
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();

        // Dummy credentials (you can change)
        let validEmail = "admin@gmail.com";
        let validPassword = "123456";

        if (email === validEmail && password === validPassword) {
            $(".error-msg").hide();
            $(".login-success").fadeIn();
            this.reset(); // ✅ reset form
        } else {
            $(".error-msg").fadeIn();
            $(".auth-box").addClass("shake");
            setTimeout(() => $(".auth-box").removeClass("shake"), 300);
        }

    });
    $("a[href^='#']").click(function (e) {
        e.preventDefault();

        let target = $($(this).attr("href"));

        $("html, body").animate({
            scrollTop: target.offset().top - 80 // adjust header height
        }, 600);
    });
});

document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", function () {
        const input = this.parentElement.querySelector("input");

        const type = input.type === "password" ? "text" : "password";
        input.type = type;

        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
    });
});