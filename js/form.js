const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const zoomInButton = document.querySelector('.scale__control--bigger');
const zoomOutButton = document.querySelector('.scale__control--smaller');
const scaleValueElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

const isEscKey = (event) => event.key === 'Escape';

function clearForm() {
  uploadButton.value = '';
  hashtagInput.value = '';
  commentInput.value = '';
}

function handleFormEscapeKey(event) {
  if (isEscKey(event)) {
    event.preventDefault();
    closeUploadWindow();
  }
}

function openUploadWindow() {
  const overlay = document.querySelector('.img-upload__overlay');
  overlay.classList.remove('hidden');
  document.body.addEventListener('keydown', handleFormEscapeKey);
}

function closeUploadWindow() {
  const overlay = document.querySelector('.img-upload__overlay');
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleFormEscapeKey);
  clearForm();
}

zoomOutButton.addEventListener('click', () => {
  const currentScale = parseInt(scaleValueElement.value, 10);
  if (currentScale > 25) {
    scaleValueElement.value = `${currentScale - 25}%`;
    imagePreview.style.transform = `scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});

zoomInButton.addEventListener('click', () => {
  const currentScale = parseInt(scaleValueElement.value, 10);
  if (currentScale < 100) {
    scaleValueElement.value = `${currentScale + 25}%`;
    imagePreview.style.transform = `scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});

let selectedEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');
let previousEffectClass = 'effects__preview--none';

const effectRadios = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');
effectRadios.forEach((radio) => {
  radio.addEventListener('input', () => { applySelectedEffect(); });
});

function applySelectedEffect() {
  for (const radio of effectRadios) {
    if (radio.checked) {
      selectedEffect = radio;
      imagePreview.classList.remove(previousEffectClass);
      const newEffectClass = `effects__preview--${selectedEffect.value}`;
      imagePreview.classList.add(newEffectClass);
      previousEffectClass = newEffectClass;
    }
  }
}

uploadButton.addEventListener('change', openUploadWindow);
cancelButton.addEventListener('click', closeUploadWindow);
