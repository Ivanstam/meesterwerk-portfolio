# Meesterwerk-portfolio
### Made with love by [Ivanstam](https://github.com/Ivanstam)

*Practice project made with the intention of getting into Vue.js, VueX and Tailwind.*

An art portfolio using reactive data, a few views/routes using shared data with also some distinct sources for examples.  
Currently using the [Rijksmuseum](https://www.rijksmuseum.nl/api/nl/) object metadata APIs (Collection & Details).  
In order to use the application API fetches, create(or fill) a root .env file and add the following lines:  
```
VITE_API_BASE_URL="https://www.rijksmuseum.nl/api/nl/",
VITE_API_SECRET_KEY="your secret key here"
```
A secret key can be recieved for free by making an account, see the API page for details