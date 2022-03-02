export function searchCollection() {
    const searchApi = 'https://www.rijksmuseum.nl/api/nl/collection?key=VXCEr6jm&ps=10imgonly=true&q=';
    const input = document.querySelector('input');



    function getApi() {
        fetch(searchApi + input.value)
            .then(function (response) {
                console.log(response.json)
                return response.json();
        
            }).then(function (search) {
                console.log(search)
            }).catch((error) => {
                console.log(error);
            });

    }

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