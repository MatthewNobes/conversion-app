//import css from './Home.module.css';
import '../App.css'

const PageHeading = () => {
  return (
    <h1 className="PageTitle">
      Conversion App - Home
    </h1>
  )
}

const ApplicationDescription = () => {
  return (
    <p>
      The Conversion App was created as a simple place to find unit conversions without scouring the internet for a decent solution. As well as providing conversions, this system will explain the equations used for the conversion in a clear and logical manner. 
    </p>
  )
}

export default function Home() {
  return (
      <>
        <PageHeading />
        <ApplicationDescription />
        <p>
        The method for making conversions is to convert the input into a base unit, like a kilogram and then convert this base unit into the users desired unit. For example, the user might input 120lb which they want converted to tonnes. This would be converted from pounds to kilograms and then from kilograms to tonnes.
        </p>
      </>
  );
}