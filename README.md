Overview
"# MobileAppProject (g00351932)" 
This is a web application made using ionic/angular and typescript.
The purpose if this application is to get the current weather of cities in Europe.
The application tells the user several different points about each city they have selected which includes:
1: The name of the city chosen.
2: The country’s initials ex (IE)
3: The current temperature (rounded to the closest whole number)
4: A description of the current weather in that location ex (scattered clouds)
5: An icon which gives the user visual representation of the current weather.
6: The number of clouds in that current area
7: The humidity 
8: The lowest and highest temperature
9: The latitude and longitude of the current location.
These features are all called from the "open weather map api"

When the user clicks on the button "update weather" they are brought to a new page where they are presented with a menu city in Europe. 
They are presented in the form of radio buttons when the user chooses a city they then click the "Add weather button" their selection is saved and they are brought back to the home page which in turn displays the weather for their chosen city. This is what the application does.

The code behind
home.html 
The home.html consists of 5 divs which contains the various information provided with the application. This is where the main body of the information is shown. All the divs colour schemes are the same for consistency, the width and height varies. The variables created on home.ts are then binded using String interpolation to call them from the api and display them on the screen. 
The button calls the getWeather() function which navigates the user from the home page to the “selectWeatherPage” via the navContoller.
The whole page is then put inside one big div


home.ts
The home.ts page is where the variables are put together with the api call. When the home.ts page is opened you will see various variables that are associated with its coinciding api call.
The getWeather() function is used to allow the user to navigate to the selectWeatherPage.
The recieveWeather() function gets the weather from the selectWeatherPage. It takes a string which takes the users selection and receives it.
The Storage is then called via “weatherStatus” and then assigns “val” the selection associated with “information” (created on selectWeather.ts).
There is an if/else selection for weather the storage is null. If the storage is null, then the default weather shown will be Dublin. If the storage is not empty, then the stored value (city) will appear when the user re-opens the web page.
The class location is then subscribing to the api via “weather” which calls the api. Then the associated variables are set in conjunction to which data from the api is being received. Ex
 ( this.cityName = weather.name --- returns the cities name)

home.scss
This page has the various settings for the text outputted on home.html to be displayed. It also includes the way it is shown either left/right etc.

Select-weather.html
The data on this page is inside a div which outputs the cities to the user in the form of text (the city name) and selected with radio buttons. The whole page is also inside one big div like home.html.
The button onSave() saves the users selection into the storage and then shows it on home.html. It then brings the user back to the home page where their chosen cities weather is displayed . 

Select-weather.ts
This is where the users selected city is chosen and saved to be passed onto the home page and api to be displayed on home.html.
When the user selects a city, their selection is then saved using the onSave() function. It stores their selection in “weatherStaus”and then it then brings the user back to the home page where their chosen cities weather is displayed. It does this by using the storage imported from ionic storage and navigates to the home page using the nav control.
ionViewWillEnter() 
This sets the users choice “information” and sets it to “val” 

forecast.ts 
This is where the api is set up and it takes in the the “city” variable which allows it it to be changed everytime. If this variable wasn’t here and it just had a city name such as “Galway” the api would only ever read in galways data.

That concludes the readme for this project.
*Please note thaat this was made using the command "ionic serve" and looks its best using that command.
















