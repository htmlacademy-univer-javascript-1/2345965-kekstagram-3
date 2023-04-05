import {getRandomByInterval} from "./util.js";

function generatePhotos() {
  const photos = [];

  for (let i = 1; i <= 25; i++) {
    const id = i;
    const url = `photos/${i}.jpg`;
    const description = `Описание фотографии ${i}`;
    const likes = getRandomByInterval(15, 200);
    const comments = getRandomByInterval(0, 200);

    photos.push({ id, url, description, likes, comments });
  }

  return photos;
}


export {
  generatePhotos
};
