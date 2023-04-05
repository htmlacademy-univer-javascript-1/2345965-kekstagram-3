function getRandomByInterval(begin, end) {
  //будем считать, что если begin > end, то пользователь хочет получить результат в [end , begin]
  //если begin == end, то функция должна возвращать само число
  //если оба числа отрицательные, то возвращаем 0
  if (begin > end) {
    [begin, end] = [end, begin];
  }

  begin = Math.max(Math.ceil(begin), 0);
  end = Math.max(Math.floor(end), 0);

  return Math.floor(Math.random() * (end - begin + 1) + begin);
}

function checkStrLessThan(str, num) {
  //если параметр num - отрицательный или 0, то значение функция возвращает true если параметр str - строка
  return (typeof num === 'number') && (num <= 0 || str.length <= Math.ceil(num));
}

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

generatePhotos();
checkStrLessThan('hello', 5);
