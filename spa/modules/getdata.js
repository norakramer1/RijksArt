import { renderData } from './render.js'

export function dataGet() {
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true';

    getData();

    //3. functions
    function getData() {
        fetch(rijksApi)
            .then(function (response) {
                return response.json();
            }).then(function (collection) {
                getAdditionalData(collection)
            })

            .catch((error) => {
                console.log(error);
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
    }
};