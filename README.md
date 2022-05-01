# Conversion App

The Conversion App was created as a simple place to find unit conversions without scouring the internet for a decent solution. As well as providing conversions, this system will explain the equations used for the conversion in a clear and logical manner. 

## Plan

Initially this application will provide basic conversions for a few different types of units, however this project aims to be expanded in the future to cover more areas. Table 1 shows the types of unit conversions that are planned to be added and the current work status of those features. 

Unit type  | Current status
------------- | -------------
Distances  | Initial version (v0.2.0)
Mass  | Initial version (v0.1.0)
Speed | Planning stage
Binary | Proposed
Memory (Mb) | Proposed
Internet speed | Proposed
Currency | API investigation 
Temperature | Proposed

Table 1 - Proposed unit conversions to be added. 

### Core functionality 

The method for making conversions is to convert the input into a base unit, like a kilogram and then convert this base unit into the users desired unit. For example, the user might input 120lb which they want converted to tonnes. This would be converted from pounds to kilograms and then from kilograms to tonnes.

#### Base units

The base units for each type of conversion can be seen in Table 2. 

Unit type  | Base unit
------------- | -------------
Distances  | Meters
Mass  | Kilograms


Table 2 - The common base units for each conversion type.

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

## Production 

A production version of this application is now live, hosted using GitHub pages. To facilitate this, the application is setup with the [gh-pages npm extension](https://www.npmjs.com/package/gh-pages "gh-pages npm package"). 

Pushing new version to the gh-pages branch, two scripts have been setup, a deploy and a pre-deploy. All that is needed to push to this branch is the deploy command.

```
npm run predeploy
npm run deploy
```

The production version can be viewed at: [https://matthewnobes.github.io/conversion-app/](https://matthewnobes.github.io/conversion-app/ "conversion-app production version")

### Development guidance 

The following should be taken into account when making changes to this repo:

* Major features such as mass conversion are stored in the features directory
* Smaller components such as the Header are stored within the components directory.
* Test scripts are located in the same directory as the functions and components they test
* Styling is done within the same directory as where it is used, using css modules. Any major project styling is done from a central CSS file stored in the theme directory
* Material UI should handle most styling and general changes should be done using the theme object, located in the theme directory
* The utils directory is for common functions and elements that might be needed in multiple areas in the future, such as the copy to clipboard function. This makes them easier to find and use for other projects in the future.