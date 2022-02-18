console.log('we working');

// 1. alle variables
// var key = config.API_KEY;
const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true';


//object-number
///[object-number]


// 2. the story

getData();

// 3. functions


//
// this works!!

// function getData() {

//     fetch(rijksApi)
//     .then(function(response) {
//         console.log(response);

// return response.json();
// }) .then(function(collection) {
//     const list = $('ul');
//     for (let i = 0; i < collection.artObjects.length; i++) {
//         //    list.insertAdjacentHTML('beforebegin', `<li>${collection.artObjects[i].title}</li>`);
//         //    list.insertAdjacentHTML('beforebegin', `<li>${collection.artObjects[i].longTitle}</li>`);
//         //    list.insertAdjacentHTML('beforebegin', `<li>${collection.artObjects[i].description}</li>`);
//            list.insertAdjacentHTML('beforebegin', `<li><img src=${collection.artObjects[i].webImage.url}></li>`);

//         }
//     }  
// )};



//2. the story
getData()
//3. functions
function getData() {
    fetch(rijksApi)
    .then(function(response) {
        // const body = $('section');
        //     body.insertAdjacentHTML('beforebegin',
        // `<h2>Nothing to see</h2>`
        // )
        return response.json();
    // }).then(function() {
    //     let element = document.querySelector("h2");
    // element.parentNode.removeChild(element);
     })
    .then(function(collection) {
        console.log(collection)
        for(let i = 0; i < collection.artObjects.length; i++) {
            fetch('https://www.rijksmuseum.nl/api/nl/collection/' + collection.artObjects[i].objectNumber + 'key=VXCEr6jm&ps=10imgonly=true')
            .then(function(response) {
                return response.json();
            })
            .then(function(detailed) {
                console.log(detailed)
                const list = $('section ul');
                list.insertAdjacentHTML('beforeend', 
                    `<li class="fixed-ratio-content">
                    <h2>${detailed.artObject.dating.presentingDate}</h2>
                        <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
                    </li>`
                )           
            }).catch((error) => {
                console.log('error');
              });
        }
    }) 
};


 function $(element) {
    return document.querySelector(element);
    };