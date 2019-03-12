## sample weather app

### Description from Dave Ceddia course

The app fetches your local weather from the free MetaWeather API - it doesn't even need an API key!

The MetaWeather API returns the current weather along with a 5-day forecast, and they even have some images you can use! Their documentation is all on one short page.

Unfortunately the API doesn't set the CORS header, so requests from browsers get denied. I set up a proxy that'll set the CORS header for you: https://weather.daveceddia.com - to use it, make your API calls to my server instead of metaweather, e.g.:

https://weather.daveceddia.com/api/location/search/?query=san

instead of:

https://www.metaweather.com/api/location/search/?query=san

Getting the weather is a 2-step process:

Search for the location by city name or latitude/longitude. The response will contain a field called **woeid** (Where on Earth ID). Make a request to */api/location/search/?query=yourquery*
Request the weather for a specific location by passing up the **woeid**. Make a request to */api/location/the_woeid*

So this will require two HTTP calls.

Create a blank React app from scratch, and add Redux + redux-thunk.

Then, write an app that accepts a location name as input, and calls MetaWeather (twice!) to fetch the weather for that location.

It can look however you want (you don't even have to style it if you don't want to!). Roughly speaking, you'll want a text box, a button, and a display of the weather.

Show a loading spinner while the weather is being fetched, and gray out or hide the weather if you change the city name after fetching it.