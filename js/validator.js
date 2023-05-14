import { checkMaxLength } from './util.js';

const uploadForm = document.querySelector('.img-upload__form');

const validator = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

const commentInput = uploadForm.querySelector('.text__description');
const maxCommentLength = 240;
const commentErrorMessage = `Комментарий не должен превышать ${maxCommentLength} символов`;

validator.addValidator(commentInput, validateComment, commentErrorMessage);

uploadForm.addEventListener('submit', (event) => {
  if (!validator.validate()) {
    event.preventDefault();
  }
});

function validateComment(value) {
  return checkMaxLength(value, maxCommentLength) && !checkMaxLength(value, 20);
}
