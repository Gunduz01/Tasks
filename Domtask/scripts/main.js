document.cookie = "profile=Gunduz; expires=Thu, 05 Jun 2025 23:59:59 GMT; path=/";
var slides = document.querySelectorAll(".slide");
var nextBtn = document.querySelector(".btn-next");
var prevBtn = document.querySelector(".btn-prev");
var dotsContainer = document.querySelector(".dots");
var text = document.getElementsByClassName("text-p")[0];
var dayBtn = document.getElementById("dayBtn");
var nightBtn = document.getElementById("nightBtn");
var body = document.body;
var currentSlide = 0;
var totalSlides = slides.length;
// Slide'ları başlat
slides.forEach(function (slide, index) {
    slide.style.transform = "translateX(".concat(100 * index, "%)");
});
// Dot'ları oluştur
if (dotsContainer) {
    slides.forEach(function (_, index) {
        var dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0)
            dot.classList.add("active");
        dot.setAttribute("data-slide", index.toString());
        dotsContainer.appendChild(dot);
    });
}
// Dot güncelleme fonksiyonu
function updateDots(index) {
    var _a;
    var dots = document.querySelectorAll(".dot");
    dots.forEach(function (dot) { return dot.classList.remove("active"); });
    (_a = dots[index]) === null || _a === void 0 ? void 0 : _a.classList.add("active");
}
// Slide geçiş fonksiyonu
function goToSlide(index) {
    slides.forEach(function (slide, i) {
        slide.style.transform = "translateX(".concat(100 * (i - index), "%)");
    });
    updateDots(index);
}
// Next
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
});
// Prev
prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
});
// Dotlara tıklama
dotsContainer === null || dotsContainer === void 0 ? void 0 : dotsContainer.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("dot")) {
        var slideAttr = target.getAttribute("data-slide");
        if (slideAttr !== null) {
            var slideTo = parseInt(slideAttr, 10);
            if (!isNaN(slideTo)) {
                currentSlide = slideTo;
                goToSlide(currentSlide);
            }
        }
    }
});
function themeDay() {
    if (body.style.backgroundColor === "white") {
        localStorage.setItem("tema", "gunduz");
    }
    else {
        body.style.backgroundColor = "white";
        text.style.color = "midnightblue";
    }
}
function themeNight() {
    if (body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
        text.style.color = "white";
        localStorage.setItem("tema", "gece");
    }
    else {
    }
}
window.onload = function () {
    var tema = localStorage.getItem("tema");
    if (tema === "gece") {
        document.body.style.backgroundColor = "black";
        text.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        text.style.color = "midnightblue";
    }
};
console.log(document.cookie);
dayBtn === null || dayBtn === void 0 ? void 0 : dayBtn.addEventListener("click", themeDay);
nightBtn === null || nightBtn === void 0 ? void 0 : nightBtn.addEventListener("click", themeNight);
