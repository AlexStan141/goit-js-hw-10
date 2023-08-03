import { fetchBreeds, fetchCatByBreed, findCat } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

var select = document.getElementsByTagName('select')[0];
var info = document.querySelector('.cat-info');
var loader = document.querySelector('.loader');

select.style.visibility = 'hidden';
info.style.visibility = 'hidden';

fetchBreeds()
  .then(res => {
    return res.json();
  })
  .then(data => {
    loader.style.visibility = 'hidden';
    if (!data.message) {
      for (let breed of data) {
        select.innerHTML += `<option value=${breed.id}>${breed.name}</option>`;
      }
      select.style.visibility = 'visible';
      new SlimSelect({
        select: select,
      });
    } else {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    }
  });

select.addEventListener('change', () => {
  var catImageSrc;
  loader.style.visibility = 'visible';
  info.innerHTML = '';
  fetchCatByBreed(select.value)
    .then(res => {
      return res.json();
    })
    .then(data => {
      loader.style.visibility = 'hidden';
      if (data.length == 0) {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
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
