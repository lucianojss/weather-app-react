# Weather App React

This is an app that provides the weather forecast for a given location for the next 5 days, a working version is hosted at https://weather-forecast-buildit.herokuapp.com/

Unfortunately the daily forecast API provided OpenWeatherMap forecast API is only available for paid costumers, because of that I used the Yahoo weather API instead.
You can see that here: https://openweathermap.org/price

I decided to use redux for the state management of the application and react.
Also used Material UI that gives some UI components out of the box.

With more time I would like to add:
    * Service Worker to get offline and cache support.
    * Store Unit preferences from the user.
    * Finish Unit tests

# Prerequisites

To run locally the app, you need to have node installed in your machine.

# Run client locally

    npm install
    npm run start

For production you can run following command that will generate a dist folder.

    npm run build

# Run unit tests

Due the lack of time I made just unit tests for the reducers.

    npm run test



