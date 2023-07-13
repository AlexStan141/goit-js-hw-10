import { fetchBreeds, fetchCatByBreed } from '../cat-api';
import { hideComponent, showComponent } from './toggleComponents';
var catPanel = document.querySelector('div.cat-info');
var catInfo = document.createElement('div');
var body = document.querySelector('body');
var loader = document.querySelector('span.loader');
var error = document.querySelector('p.error');
var breedSelect = document.querySelector('select.breed-select');

function addCatPanelStyle() {
  catPanel.style.display = 'flex';
  catPanel.style.flexDirection = 'row';
  catPanel.style.gap = '30px';
  catPanel.style.marginTop = '50px';
}

function showImage(data, cat) {
  var img = document.createElement('img');
  img.src = data[0].url;
  img.alt = cat.name;
  img.width = 200;
  img.height = 200;
  catPanel.append(img);
}

function addCatInfoStyle() {
  catInfo.innerHTML = '';
  catInfo.style.display = 'flex';
  catInfo.style.flexDirection = 'column';
  catInfo.style.gap = 30;
}

function showCatNameInCatInfo(cat) {
  var h3 = document.createElement('h3');
  h3.innerText = cat.name;
  catInfo.append(h3);
}

function showCatDescriptionInCatInfo(cat) {
  var p = document.createElement('p');
  p.innerText = cat.description;
  catInfo.append(p);
}

function showCatTemperamentInCatInfo(cat) {
  var p = document.createElement('p');
  p.innerHTML = '<b>Temperament: </b>' + cat.temperament;
  catInfo.append(p);
}

export function completeCatInfo(breedId) {
  catPanel.innerHTML = '';
  showComponent(loader);
  hideComponent(error);
  fetchBreeds()
    .then(response => {
      if (response.status != 200) {
        throw new Error(error.innerText);
      }
      return response.data;
    })
    .then(data => {
      var cat = data.find(element => element.id == breedId);
      fetchCatByBreed(cat.id)
        .then(response2 => {
          if (response2.data.length == 0) {
            throw new Error(error.innerText);
          }
          return response2.data;
        })
        .then(data2 => {
          addCatPanelStyle();
          showImage(data2, cat);
          addCatInfoStyle();
          showCatNameInCatInfo(cat);
          showCatDescriptionInCatInfo(cat);
          showCatTemperamentInCatInfo(cat);
          catPanel.append(catInfo);
          body.append(catPanel);
          hideComponent(loader);
        })
        .catch(error3 => {
          showComponent(error);
          hideComponent(loader);
          hideComponent(breedSelect);
        });
    })
    .catch(error2 => {
      showComponent(error);
      hideComponent(loader);
    });
}
