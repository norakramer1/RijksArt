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
3. Make a config.js file to hide your API keys in

- In you terminal navigate to the 'spa' folder, then to 'scripts'
- Type `touch config.js`
- In config.js type 
```
var config = {
    API_KEY : ' '
  }
  
  ```
- Put your API key in between the brackets
- Link your config.js file in your HTML (that's already done unless you picked a different name for the config file)

4. Put your config file in your gitignore

- Add gitignore file in your 'spa' folder
- Add `#config.js` to it

5. Add API key to script.js
- Add variable `var key = config.API_KEY;`
- Change your API to `key` in all places that your API key is used.
- Example: 'https://www.your-api-host.com/?query&id=' + token + '&pass=' + key'

6. Check if config.js is really hidden before you push to Github.

Source on hiding API keys: [How To Hide API Key In Github Repo](https://dev.to/ptprashanttripathi/how-to-hide-api-key-in-github-repo-2ik9)



## 
