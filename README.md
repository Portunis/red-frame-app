## Test task for a frontend developer

The test task presents [layout](https://www.figma.com/file/vGNUeAv19nL6td438ZaeWV/Knokey-test-template ) apartment booking service. It is necessary to develop a SPA application with a page for displaying a list of apartments.

The purpose of the task: to demonstrate the quality of the layout, the skills of working with vue and typescript, working with queries and data processing, working with the methods of the composition API

Expected execution time ---------------- 8-10 hours


### Use in development:

* The main stack on which we develop SPA applications is VUE + QUASAR (optional)
* Adhere to a modular approach
* Axios for working with queries
* BEM
* Vue3
* Eslint
* Typescript
* Git


### Tasks:
* Make up the Apartment List page according to the layout.
* Implement an asynchronous request to the [apartments] JSON file (./apartments.json). During the execution of the request, the loader must be in place of the list.
* Display a list of apartments - all information in the card should be displayed based on the data of the JSON file.
* By clicking on the marker icon in the card, a map with the geo-label of the corresponding apartments opens. The other buttons in the layout have no functionality.
* Implement full-screen viewing of photos in the card by clicking on the camera icon using the gallery (any).


# Stack

```
1. VUE
2. TYPESCRIPT
3. VITE
```

# Install App

### npm
```
npm install
npm run format
npm run dev
```


### .env
```
VITE_SOME_BASE_URL_API=YOUR_API_URL
VITE_SOME_API_KEY_YANDEX_MAP=YOUR_API_KEY_YANDEX_MAP
```
