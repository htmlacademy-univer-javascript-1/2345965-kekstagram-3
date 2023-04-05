function createPictureElement(pictureData) {
  const pictureTemplate = document.querySelector('#picture').content.cloneNode(true);
  const pictureImg = pictureTemplate.querySelector('.picture__img');
  const pictureLikes = pictureTemplate.querySelector('.picture__likes');
  const pictureComments = pictureTemplate.querySelector('.picture__comments');

  pictureImg.src = pictureData.url;
  pictureLikes.textContent = pictureData.likes;
  pictureComments.textContent = pictureData.comments.length;

  return pictureTemplate;
}

export {createPictureElement};
