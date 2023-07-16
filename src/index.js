import { fetchBreeds, fetchCatByBreed, findCat } from './cat-api';

var select = document.querySelector('.breed-select');
var error = document.querySelector('.error');
var info = document.querySelector('.cat-info');
var loader = document.querySelector('.loader');

select.style.visibility = 'hidden';
error.style.visibility = 'hidden';
info.style.visibility = 'hidden';

fetchBreeds()
  .then(res => {
    return res.json();
  })
  .then(data => {
    error.style.visibility = 'hidden';
    loader.style.visibility = 'hidden';
    if (!data.message) {
      for (let breed of data) {
        select.innerHTML += `<option value=${breed.id}>${breed.name}</option>`;
      }
      select.style.visibility = 'visible';
    } else {
      error.style.visibility = 'visible';
    }
  });

select.addEventListener('change', () => {
  var catImageSrc;
  error.style.visibility = 'hidden';
  loader.style.visibility = 'visible';
  info.innerHTML = '';
  fetchCatByBreed(select.value)
    .then(res => {
      return res.json();
    })
    .then(data => {
      loader.style.visibility = 'hidden';
      if (data.length == 0) {
        error.style.visibility = 'visible';
      } else {
        catImageSrc = data[0].url;
        findCat(select.value).then(res2 => {
          info.innerHTML = `<div style="display:flex; flex-direction:row; gap:50px;">
                                          <img src=${catImageSrc} alt="${res2.description}" width=200 height=200/>
                                          <div style="display:flex; flex-direction:column; gap:15px;">
                                          <h3>${res2.name}</h3>
                                          <p>${res2.description}</p>
                                          <p><b>Temperament</b>${res2.temperament}</p>
                                          </div></div>`;
          info.style.visibility = 'visible';
        });
      }
    });
});
