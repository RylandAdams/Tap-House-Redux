import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var quantity = props.quantity;
  if (quantity <= 0) {
    return (
      <>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.brand}</h4>
          <h4>{props.alcoholContent}%</h4>
          <h4>{props.price}</h4>
          <h4>Out of Stock</h4>
        </div>
      </>
    )
  } else if (quantity <= 5){
    return (
      <>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.brand}</h4>
          <h4>{props.alcoholContent}%</h4>
          <h4>{props.price}</h4>
          <h4>Only {props.quantity} Left!</h4>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <h3>{props.name}</h3>
          <h4>{props.brand}</h4>
          <h4>{props.alcoholContent}%</h4>
          <h4>{props.price}</h4>
          <h4>{props.quantity}</h4>
        </div>
      </>
    )
  }     
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg