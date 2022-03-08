
import { $ } from './selectel.js'

export function renderData(detailed) {

    console.log(detailed)

    const list = $('section ul');
    list.insertAdjacentHTML('beforeend',
        `<li>
        <a href="#info">
                <h2>${detailed.artObject.dating.sortingDate}</h2>
                    <img src="${detailed.artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${detailed.artObject.title}">
                    </a>
                </li>`
    )

};
  

export function renderSearchData(search) {

    console.log(search)

    const list = $('section ul');
    list.insertAdjacentHTML('beforeend',
        `<li>
        <a href="">
                <h2>${search.artObject.dating.sortingDate}</h2>
                    <img src="${search.artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${search.artObject.title}">
                </li> `
    )

};

export function renderDetails(search) {

    console.log(search)

    const list = $('section ul');
    list.insertAdjacentHTML('beforeend',
        `<li>
        <a href="">
                <h2>${search.artObject.dating.sortingDate}</h2>
                    <img src="${search.artObject.webImage.url.slice(0, -3) + "=s1000"}" alt="${search.artObject.title}">
                </li> `
    )

};