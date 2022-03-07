
import { getAdditionalSearchData } from './extraData.js'
import { $ } from './selectel.js'

export function searchCollection() {
    const searchApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true&q=';
    const input = document.querySelector('input');
    const removeDefault = $('section ul');
    const removeFirstSearch = $('section ul.search-results');

    // li.classList.add('hide')

    function getApi() {
        fetch(searchApi + input.value)
            .then(function (response) {
                console.log(response.json)
                removeDefault.classList.add('hide');
                return response.json();
        
            }).then(function (collection) {
                // console.log(search)
                getAdditionalSearchData(collection)
            })
            .catch((error) => {
                console.log(error);
            });

    }


    // function getAdditionalData(collection) {
    //     for(let i = 0; i < collection.artObjects.length; i++) {
    //     fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=true')
    //             .then(function(response) {
    //                 return response.json();
    //      }).then(function(search){
    //         renderSearchData(search)
    //      })
    //      .catch((error) => {
    //         console.log(error);
    //       });
    //         }
    //     };
    

// function renderData(detailed) {

//             console.log(detailed)
        
//             const list = $('section ul.search-results');
//             list.insertAdjacentHTML('beforeend',
//                 `<li>
//                         <h2>${detailed.artObject.dating.sortingDate}</h2>
//                             <img src="${detailed.artObject.webImage.url.slice(0, -3)+"=s1000"}" alt="${detailed.artObject.title}">
//                         </li>`
//             )
        
//         };

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