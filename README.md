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



## Development 

To get started with this application, you will first need to download all the necessary dependencies for the project using the following command: 

``` 
npm i
```

Once downloaded, you can then launch the application using the start command:

``` 
npm start
```

### Testing 

This application has been setup with Jest testing to ensure that code can be quickly checked for defects against its functionality when new content is added. The test suite can be launched using the following npm command:

``` 
npm test
```

### Development guidance 

The following should be taken into account when making changes to this repo:

* Major features such as mass conversion are stored in the features directory
* Smaller components such as the Header are stored within the components directory.
* Test scripts are located in the same directory as the functions and components they test
* Styling is done within the same directory as where it is used, using css modules. Any major project styling is done from a central CSS file stored in the theme directory
* Material UI should handle most styling and general changes should be done using the theme object, located in the theme directory
* The utils directory is for common functions and elements that might be needed in multiple areas in the future, such as the copy to clipboard function. This makes them easier to find and use for other projects in the future.