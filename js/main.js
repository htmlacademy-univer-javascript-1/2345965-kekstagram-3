import {generatePhotos} from './data.js';
import {createPictureElement} from './picture.js';
import './form.js';
import './validator.js';
//Задание 7 часть 2
const picturesData = generatePhotos();

const picturesFragment = document.createDocumentFragment();

picturesData.forEach((pictureData) => {
  const pictureElement = createPictureElement(pictureData);
  picturesFragment.appendChild(pictureElement);
});

const picturesList = document.querySelector('.pictures');
picturesList.appendChild(picturesFragment);

