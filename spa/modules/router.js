

//     function makeDiv() {
    
//         const div = $('div');
//         div.insertAdjacentHTML('beforeend', 
//             `<h1>${detailed.artObject.longTitle}</h1>
//             <p>${detailed.artObject.titles}</p>
//              <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
//             `
//         )          

// }


import '../lib/routie.js'
import { dataGet } from './getData.js'

export function routes() {


routie ({
  '': function() {
    dataGet()
    console.log('home pagina')


},
'info': function() {
    dataGet();
    console.log('info pagina')

}


  })
};