const loading = document.querySelector('.loading') as HTMLDivElement;
const progressBar = document.querySelector('.progress__bar') as HTMLDivElement;
const progressText = document.querySelector('.progress__text') as HTMLDivElement;
const progressPercentage = document.querySelector('.progress__percentage') as HTMLSpanElement;
const startButton = document.querySelector('.prgBtn') as HTMLButtonElement;

let progress = 0;

// İlk 5 saniyə loading ekranı göstərilsin, sonra progress görünsün
setTimeout(() => {
  loading.style.display = 'none';
  updateProgressBar();
  startButton.style.display = 'block'; // Butonu göstər
}, 5000);

// Proqress barı yeniləyən funksiya
function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
  progressPercentage.textContent = `${progress}%`;
  if (progress >= 100) {
    progressText.textContent = 'Progress: Tamamlandı!';
    startButton.disabled = true;
  } else {
    progressText.textContent = 'Progress:';
    startButton.disabled = false;
  }
}

// Başlanğıcda buton gizli olsun
startButton.style.display = 'none';

// Butona kliklədikdə 20% artır
startButton?.addEventListener('click', () => {
  if (progress < 100) {
    progress += 20;
    if (progress > 100) progress = 100;
    updateProgressBar();
  }
});