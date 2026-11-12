
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");
const themeButton = document.getElementById("themeButton");
const topButton = document.getElementById("topButton");
const contactForm = document.getElementById("contactForm");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

document.querySelectorAll(".nav-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☾";
    } else {
        themeButton.textContent = "☀";
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pilihan = document.getElementById("pilihan").value;
    const pesan = document.getElementById("pesan").value.trim();

    if (nama === "" || email === "" || pilihan === "" || pesan === "") {
        alert("Semua kolom harus diisi terlebih dahulu!");
        return;
    }

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!polaEmail.test(email)) {
        alert("Masukkan alamat email yang valid!");
        return;
    }

    alert("Terima kasih, " + nama + "! Pesan kamu berhasil dikirim.");

    contactForm.reset();
});
