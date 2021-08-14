const addImage = (url, callback) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback(null, { width, height });
  };

  const onImageLoadError = () => callback('Image load failed');

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};

export const addImageV2 = (url) =>
  new Promise((resolve, reject) => {
    const onImageLoadedCallback = (error, imgElem) => {
      if (error) {
        reject(error);
        return;
      }
      const { width, height } = imgElem;
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
      resolve({ width, height });
    };
    addImage(url, onImageLoadedCallback);
  });

// examples

// addImageV2(
//   'https://www.vets4pets.com/siteassets/species/cat/cat-close-up-of-side-profile.jpg'
// )
//   .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
//   .catch((error) => console.log(error)); // ==> 'Image load failed'