var loading = document.querySelector('.loading');
var progressBar = document.querySelector('.progress__bar');
var progressText = document.querySelector('.progress__text');
var progressPercentage = document.querySelector('.progress__percentage');
var startButton = document.querySelector('.prgBtn');
var progress = 0;
// İlk 5 saniyə loading ekranı göstərilsin, sonra progress görünsün
setTimeout(function () {
    loading.style.display = 'none';
    updateProgressBar();
    startButton.style.display = 'block'; // Butonu göstər
}, 5000);
// Proqress barı yeniləyən funksiya
function updateProgressBar() {
    progressBar.style.width = "".concat(progress, "%");
    progressPercentage.textContent = "".concat(progress, "%");
    if (progress >= 100) {
        progressText.textContent = 'Progress: Tamamlandı!';
        startButton.disabled = true;
    }
    else {
        progressText.textContent = 'Progress:';
        startButton.disabled = false;
    }
}
// Başlanğıcda buton gizli olsun
startButton.style.display = 'none';
// Butona kliklədikdə 20% artır
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', function () {
    if (progress < 100) {
        progress += 20;
        if (progress > 100)
            progress = 100;
        updateProgressBar();
    }
});
