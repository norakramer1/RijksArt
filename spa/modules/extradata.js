
import { renderData } from '../modules/render.js'
import { renderSearchData } from './render.js'

 export function getAdditionalData(collection) {
    for(let i = 0; i < collection.artObjects.length; i++) {
    fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=true')
            .then(function(response) {
                return response.json();
     }).then(function(detailed){
        renderData(detailed)
     })
     .catch((error) => {
        console.log(error);
      });
        }
    };


    export function getAdditionalSearchData(collection) {
      for(let i = 0; i < collection.artObjects.length; i++) {
      fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=true')
              .then(function(response) {
                  return response.json();
       }).then(function(search){
          renderSearchData(search)
       })
       .catch((error) => {
          console.log(error);
        });
          }
      };
