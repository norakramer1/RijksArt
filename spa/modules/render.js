import {
    $
} from './selectel.js'

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