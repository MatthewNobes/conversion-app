# Conversion App

The Conversion App was created as a simple place to find unit conversions without scouring the internet for a decent solution. As well as providing conversions, this system will explain the equations used for the conversion in a clear and logical manner. 

## Plan

Initially this application will provide basic conversions for a few different types of units, however this project aims to be expanded in the future to cover more areas. Table 1 shows the types of unit conversions that are planned to be added and the current work status of those features. 

Unit type  | Current status
------------- | -------------
Distances  | In development
Mass  | In development
Speed | Planning stage
Binary | Proposed
Memory (Mb) | Proposed
Internet speed | Proposed
Currency | API investigation 
Temperature | Proposed

Table 1 - Proposed unit conversions to be added. 

### Core functionality 

The method for making conversions is to convert the input into a base unit, like a kilogram and then convert this base unit into the users desired unit. For example, the user might input 120lb which they want converted to tonnes. This would be converted from pounds to kilograms and then from kilograms to tonnes. 


## Available Scripts

This project was built using create-react-app. As with almost any NPM React project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
