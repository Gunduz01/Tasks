document.cookie = "profile=Gunduz; expires=Thu, 05 Jun 2025 23:59:59 GMT; path=/";


const slides = document.querySelectorAll<HTMLDivElement>(".slide");
const nextBtn = document.querySelector<HTMLButtonElement>(".btn-next");
const prevBtn = document.querySelector<HTMLButtonElement>(".btn-prev");
const dotsContainer = document.querySelector<HTMLDivElement>(".dots");
const text = document.getElementsByClassName("text-p")[0] as HTMLElement;
const dayBtn = document.getElementById("dayBtn");
const nightBtn = document.getElementById("nightBtn");
const body = document.body

let currentSlide = 0;
const totalSlides = slides.length;

// Slide'ları başlat
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * index}%)`;
});

// Dot'ları oluştur
if (dotsContainer) {
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-slide", index.toString());
    dotsContainer.appendChild(dot);
  });
}

// Dot güncelleme fonksiyonu
function updateDots(index: number) {
  const dots = document.querySelectorAll<HTMLDivElement>(".dot");
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index]?.classList.add("active");
}

// Slide geçiş fonksiyonu
function goToSlide(index: number) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  updateDots(index);
}

// Next
nextBtn?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  goToSlide(currentSlide);
});

// Prev
prevBtn?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(currentSlide);
});

// Dotlara tıklama
dotsContainer?.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains("dot")) {
    const slideAttr = target.getAttribute("data-slide");
    if (slideAttr !== null) {
      const slideTo = parseInt(slideAttr, 10);
      if (!isNaN(slideTo)) {
        currentSlide = slideTo;
        goToSlide(currentSlide);
      }
    }
  }
});

function themeDay(){
  if(body.style.backgroundColor === `white`){
    localStorage.setItem("tema", "gunduz");
  } else{
    body.style.backgroundColor = `white`
    text.style.color = `midnightblue`
  }
}

function themeNight(){
  if(body.style.backgroundColor === `white`){
    body.style.backgroundColor = `black`
    text.style.color = `white`
    localStorage.setItem("tema", "gece");
  }else{

  }
}

window.onload = function() {
  const tema = localStorage.getItem("tema");
  if (tema === "gece") {
    document.body.style.backgroundColor = "black";
    text.style.color = `white`
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = `midnightblue`
  }
}

console.log(document.cookie);

dayBtn?.addEventListener("click", themeDay)
nightBtn?.addEventListener("click", themeNight)