

//     function makeDiv() {
    
//         const div = $('div');
//         div.insertAdjacentHTML('beforeend', 
//             `<h1>${detailed.artObject.longTitle}</h1>
//             <p>${detailed.artObject.titles}</p>
//              <img src="${detailed.artObject.webImage.url}" alt="${detailed.artObject.title}">
//             `
//         )          

// }



// function hashChange() {
//     if (location.hash === '#info') {
//       console.log("You're visiting a cool feature!");
//     }
//   }


// routing by: https://dev.to/aminnairi/a-router-without-a-web-server-in-vanilla-javascript-3bmg

// function onRouteChanged() {
//  console.log(window.location.hash);
//   const hash = window.location.hash;
//      const routerView = document.getElementById("router-view");

//      if (!(routerView instanceof HTMLElement)) {
//        throw new ReferenceError("No router view element available for rendering");
//      }

//      switch (hash) {
//        case "#home":
//          routerView.innerHTML = "<h1>Home page</h1>";
//          break;

//        case "#info":
//          routerView.innerHTML = "<h1>info page</h1>";
  
//          break;

//        default:
//          routerView.innerHTML = "<h1>404 - Page Not Found</h1>";
//          break;
//      }
//       }

//   window.addEventListener("hashchange", onRouteChanged);

export function routes() {


routie(
    {
'info': function() {
    // dataGet();

},
'/:id': id => {
    getData(id).then(data => {
      render(data, id)
    //   updateUI('giphy')
    });
  }


})
};