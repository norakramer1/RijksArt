import {
    getAdditionalSearchData
} from './extradata.js'
// import { $ } from './selectel.js'
import { $$ } from './selectel.js'

export function searchCollection() {
    const searchApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true&q=';
    const input = document.querySelector('input');
   


    function getApi() {
        const removeDefault = $$('section ul li');
        for (let i = 0; i < removeDefault.length; i++) {
            removeDefault[i].remove();
        }
        fetch(searchApi + input.value)
            .then(function (response) {
                return response.json();

            }).then(function (collection) {
                // console.log(search)
                getAdditionalSearchData(collection)
            })

    }

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        getApi();
    });

    document.querySelector('form button').addEventListener('click', function (e) {
        e.preventDefault();
        getApi();
    });

}