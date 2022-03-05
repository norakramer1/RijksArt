# Rijksmuseum Single Page App


## what is it?
Rijksmuseum Single Page App is exactly what it says it is, a single page app using the Rijksmuseum's RijkData API to show a collection of works to the user. Eventually the user should be able to search and filter through the collection by searching dates, artists and names of the works but i'm not quite there yet.. 

All features of the WebApp are going to happen on a single page, so only one HTML file. The user can search or look through the collection and when they click on an image they can read the description, the year it was made and (hopefully) something about the artist.

This WebApp is made with HTML, CSS and Vanilla Javascript.

## Picture of interface 

## Activity diagram
![Activity diagram Single Page App](https://github.com/norakramer1/web-app-from-scratch-2122/blob/main/spa/images/activity-diagram-spa-nora.png?raw=true)

## How to use
You can use this project to make something of your own.

1. Clone this repo
2. Get your own API key by making an account on [RijksStudio](https://www.example.com)



## Code, explained
1. Get data, 
When you enter the site the data is fetched with the getData function. It returns `response.json` and hands it off to the next function `getAdditionalData` which in turn fetches the Rijksmuseum Detailed API to get even more information.


```
    function getData() {
        fetch(rijksApi)
            .then(function (response) {
                if (response.status >= 200 && response.status <= 299) {
                loadingState.remove();
                return response.json();
            } else {
                throw Error(response.statusText);
                }
            }).then(function (collection) {
                getAdditionalData(collection)
            })

            .catch((error) => {
                console.log('error');

                list.insertAdjacentHTML('beforeend',
                    `<h3>Er ging iets mis, probeer het opnieuw</h3>`)
            
                
            });

    }

```

2. Render data
After the data has been fetched it hands it off to the next function; renderData. Which of course renders json data into HTML.

```
export function renderData(detailed) {

    console.log(detailed)

    const list = $('section ul');
    list.insertAdjacentHTML('beforeend',
        `<li class="fixed-ratio-content">
                <h2>${detailed.artObject.dating.sortingDate}</h2>
                    <img src="${detailed.artObject.webImage.url.slice(0, -3)+"=s1000"}" alt="${detailed.artObject.title}">
                </li>`
    )

};

```
3. Search
Search calls on the RijksData API again but adds the text value entered in the search bar with it by adding it to the URL. It uses the same URL + `&q=` to add the search value to it.

```
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
```