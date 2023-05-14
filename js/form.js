const uploadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

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

uploadButton.addEventListener('change', openUploadWindow);
cancelButton.addEventListener('click', closeUploadWindow);
