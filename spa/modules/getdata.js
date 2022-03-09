
import { renderData } from './render.js'
import { $ } from './selectel.js'


 export function getData() {
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true';
    const list = $('section');
    const loadingState = $('section.loading ul');
        fetch(rijksApi)
            .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                loadingState.remove();
                console.log(rijksApi);
                return response.json();
            } else {
                throw Error(response.statusText);
                }
            }).then(function (collection) {
                getAdditionalData(collection)
            })

            .catch((error) => {
                console.log(error);

                list.insertAdjacentHTML('beforeend',
                    `<h3>Er ging iets mis, probeer het opnieuw</h3>`)
            
                
            });

    }

    function getAdditionalData(collection) {
        for (let i = 0; i < collection.artObjects.length; i++) {
            fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=true')
                .then(function (response) {
                    return response.json();
                }).then(function (detailed) {
                    renderData(detailed)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
