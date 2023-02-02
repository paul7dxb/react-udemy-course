import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {

    const [formsInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const entereredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const entereredCityIsValid = !isEmpty(entereredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: entereredCityIsValid,
        postalCode: enteredPostalCodeIsValid
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      entereredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
      //Set error for user
    }

    //Submit cart data
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: entereredCity,
        postalCode: enteredPostalCode
    })
  };

  //Add invalid class to divs that have errors
  const controlClasses = (formInputField) => {
    return `${classes.control} ${
      formsInputValidity[formInputField] ? "" : classes.invalid
    }`;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={controlClasses("name")} >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        { !formsInputValidity.name && <p>Enter valid name</p> }
      </div>
      <div className={controlClasses("street")}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        { !formsInputValidity.street && <p>Enter valid street</p> }

      </div>
      <div className={controlClasses("postalCode")}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        { !formsInputValidity.postalCode && <p>Enter valid postal code</p> }

      </div>
      <div className={controlClasses("city")}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        { !formsInputValidity.city && <p>Enter valid city</p> }

      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
