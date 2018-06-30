## Getting up and running with the app

### Your system expected to have following dependencies installed
* Node.js
* npm
* [ yarn ]
* Git

1. Clone the repository

`git clone https://github.com/hiimnew/neighborhood-map.git`

2. Navigate into project folder and then install dependencies

`npm install`

3. Lastly run either yarn or npm whichever you have on your system or you prefer

`yarn start` / `npm start`

### Dependencies

* Google Maps API
* Foursquare API

### How dependencies are used

Data retrieved from foursquare API and markers are created on the google maps
depending on the foursqure response.

### Service Worker

Service worker is being activated in the production version

**To get a production version either run yarn or npm whichever you have on your system or you prefer to use**

`yarn build` / `npm run build`

You may also use python3 as a server for the production version of the app

`python3 -m http.server ./build`
