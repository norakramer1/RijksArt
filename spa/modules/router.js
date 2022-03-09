import { getData } from './getData.js'
import { $ } from './selectel.js'
import { getAdditionalDetails } from './extradata.js'
const loadingState = $('section.loading ul');
const searchForm = $('form');

export function locationHashHome() {
  if (window.location.hash === '') {
    getData();
  }

};

export function locationHashChanged() {
  if (location.hash.startsWith('#info')) {
    const id = location.hash.slice('6');
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true&q=' + id;
    const list = $('section ul');

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    fetch(rijksApi)
      .then(function (response) {
        if (response.status >= 200 && response.status <= 299) {
          loadingState.remove();
          searchForm.remove();
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }).then(function (collection) {
        getAdditionalDetails(collection)
      })

      .catch((error) => {
        console.log(error);

        list.insertAdjacentHTML('beforeend',
          `<h3>Er ging iets mis, probeer het opnieuw</h3>`)


      });


  }

}

window.onhashchange = locationHashChanged;
