import {generatePhotos} from './data.js';
import {createPictureElement} from './picture.js';

const picturesData = generatePhotos();

const picturesFragment = document.createDocumentFragment();

picturesData.forEach((pictureData) => {
  const pictureElement = createPictureElement(pictureData);
  picturesFragment.appendChild(pictureElement);
});

const picturesList = document.querySelector('.pictures');
picturesList.appendChild(picturesFragment);

