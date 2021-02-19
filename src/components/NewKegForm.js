import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
// import ReusableForm from './ReusableForm';

function NewKegForm(props){
  return (
    <>
      {/* <ReusableForm formSubmissionHandler = {handleNewKegFormSubmission} 
      buttonText="Help!"/> */}
      <form onSubmit = {handleNewKegFormSubmission}>
        <label from="name">Keg Name: </label>
        <input
          type = "text"
          name = "name"
          placeholder = "Keg Name"
          required/>
        <br></br>
        <label from="brand"> Brand: </label>
        <input
          type = "text"
          name = "brand"
          placeholder = "Brand Name"
          required/>
        <br></br>
        <label from="Price"> Price: </label>
        <input
          type = "text"
          name = "price"
          placeholder = "$0.00"
          required/>
        <br></br>
        <label from="alcoholContent"> Alcohol Content: </label>
        <input
          type = "text"
          name = "alcoholContent"
          placeholder = "by number"
          required/>
        <br></br>
        <button type = 'submit'>Create New Keg</button>
      </form>
    </>
  );

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, quantity: 124, id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;