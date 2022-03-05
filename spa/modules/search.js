
import { getAdditionalData } from './extraData.js'
import { $ } from './selectel.js'

export function searchCollection() {
    const searchApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true&q=';
    const input = document.querySelector('input');
    const removeDefault = $('section ul li');

    // li.classList.add('hide')

    function getApi() {
        fetch(searchApi + input.value)
            .then(function (response) {
                console.log(response.json)
                removeDefault.classList.add('hide');
                return response.json();
        
            }).then(function (search) {
                console.log(search)
                getAdditionalData(search)
            })
            .catch((error) => {
                console.log(error);
            });

    }
    

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        getApi();
    });



    // function getAdditionalData(collection) {
    //     for (let i = 0; i < collection.artObjects.length; i++) {
    //         fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=trueq=')
    //             .then(function (response) {
    //                 return response.json();
    //             }).then(function (detailed) {
    //             console.log(detailed)
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }
    // }

}