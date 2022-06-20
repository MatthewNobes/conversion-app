//import css from './Home.module.css';
import { Typography } from "@mui/material";
import "../../App.css";

const PageHeading = () => {
  return (
    <Typography variant="h2" component="h1" className="PageTitle">
      Unit Conversion App
    </Typography>
  );
};

const ApplicationDescription = () => {
  return (
    <Typography variant="body1">
      The Conversion App was created as a simple place to find unit conversions
      without scouring the internet for a decent solution. As well as providing
      conversions, this system will explain the equations used for the
      conversion in a clear and logical manner.
    </Typography>
  );
};

export const Home = () => {
  return (
    <>
      <PageHeading />
      <ApplicationDescription />
      <Typography variant="body1">
        The method for making conversions is to convert the input into a base
        unit, like a kilogram and then convert this base unit into the users
        desired unit. For example, the user might input 120lb which they want
        converted to tonnes. This would be converted from pounds to kilograms
        and then from kilograms to tonnes.
      </Typography>
    </>
  );
};
