# Rijksmuseum Single Page App

## Table of contents
- [What is the app](#what-is-it)]
- [Interface](#picture-of-interface)
- [API](#rijksdata-api)
- [Activity Diagram](#activity-diagram)
- [How to use this project](#how-to-use)
- [Features](#features)
- [Wishlist](#wishlist)
- [Code explaination](#code-explained)
- [Licence](#licence)

## What is it?
Rijksmuseum Single Page App is exactly what it says it is, a single page app using the Rijksmuseum's RijkData API to show a collection of works to the user. Eventually the user should be able to search and filter through the collection by searching dates, artists and names of the works but i'm not quite there yet.. 

All features of the WebApp are going to happen on a single page, so only one HTML file. The user can search or look through the collection and when they click on an image they can read the description, the year it was made and (hopefully) something about the artist.

This WebApp is made with HTML, CSS and Vanilla Javascript.

## User story
> As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown

## Picture of interface 
![Rijksmuseum Single Page App interface](https://github.com/norakramer1/web-app-from-scratch-2122/blob/main/spa/images/interface.png?raw=true)

## RijksData API

> Rijksmuseum data services provide access to object metadata, bibliographic data, controlled vocabularies and user generated content. These pages comprise the technical documentation of RijksData, also available are a general introduction, as well as the open data policy of the museum. Contact us if you have any questions or want to report issues.

Rijksmuseum provides an API with a 100.000+ art pieces in their collection. Each piece has a lot of information you can filter, sort and search through. By making a RijksStudio account you can obtain an API key and start working on using the API.

The API consists of three API's, the first one shows an image, title and some other metadata. Sometimes this is not enough, maybe you want to see a longer description or year of make. For this you need the ID of the painting to make a second call to the database (i used fetch in this case) and add the ID of the painting to the url to get all of the extra data the object has. Because there is so much data it can make the loading time of your app a little bit long.


## Activity diagram
![Activity diagram Single Page App](https://github.com/norakramer1/web-app-from-scratch-2122/blob/main/spa/images/activity-diagram-spa-nora.png?raw=true)

## How to use
You can use this project to make something of your own.

1. Clone this repo
2. Get your own API key by making an account on [RijksStudio](https://www.example.com)
3. Make a variable RijksApi with the link and key from your Rijksstudio account
4. Run a local server (because of Javascript modules)
5. Open in your browser and watch the data roll in

## Features
This project is made using HTML, CSS and Javascript. On the 'Home' page you can see 25 paintings made available through the API. Sadly right now you can't see more than 25 results at a time. This is possible but I could not fix it completely in time. You can search for terms such as: painter/artist, years, titles and even cities and countries. It wil return everything that matches your search. So say you type in 'Amsterdam' items that are made in Amsterdam are returned but also art pieces that have Amsterdam in the name. 

If you click on the image you can see a few of it's details. The details are: long title, description, year of make, materials and place where it's from.


## Wishlist
- Increment counter to get to next page (started)
- Routing and hashes for search
- Improve loading states
- Improve error state
- Make code less repetitive (more compact)
- Make styling better (make it look nicer)
- If details information is empty don't display it.



## Code explained
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

4. See details and routing
This is part of the routing which is also how i show the details page. If you click on an image it adds the ID of that image to the fetch so you get a single result back. It only does this if the hash starts with `#info`, this is added to the URL on a click of the image that is wrapped in an `<a>` tag. `#info` can't be added to search the API so with `slice` i slice off the first 6 characters. In the while loop i delete all the `li's` in a `ul` to basically empty the page of contents. `while` loops over the children of the the `list variable` and deletes them until there are none left. After that it fetches the API again with the URL and the id to get the specific data of the image the user clicked on.

```
export function locationHashChanged() {
  if (location.hash.startsWith('#info')) {
    const id = location.hash.slice('6');
    const rijksApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=25imgonly=true&q=' + id;
    const list = $('section ul');

    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    fetch(rijksApi)
      .then(function (response) {
```

## Licence
This project uses the [MIT](https://github.com/norakramer1/RijksArt/blob/main/LICENSE) license
