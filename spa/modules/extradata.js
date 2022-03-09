
import { renderSearchData } from './render.js'
import { renderDetails } from './render.js'

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


      export function getAdditionalDetails(collection) {
         for(let i = 0; i < collection.artObjects.length; i++) {
         fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + '?key=VXCEr6jm&ps=10imgonly=true')
                 .then(function(response) {
                     return response.json();
          }).then(function(details){
             renderDetails(details)
          })
          .catch((error) => {
             console.log(error);
           });
             }
         };
