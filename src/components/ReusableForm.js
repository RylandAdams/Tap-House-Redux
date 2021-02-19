// import React from 'react';
// import PropTypes from 'prop-types';

// function ReusableForm(props){
//   return (
//     <>
//       <form onSubmit = {props.formSubmissionHandler}>
//         <label from="name">Keg Name: </label>
//         <input
//           type = "text"
//           name = "name"
//           placeholder = "Keg Name"
//           required/>
//         <br></br>
//         <label from="brand"> Brand: </label>
//         <input
//           type = "text"
//           name = "brand"
//           placeholder = "Brand Name"
//           required/>
//         <br></br>
//         <label from="Price"> Price: </label>
//         <input
//           type = "text"
//           name = "price"
//           placeholder = "$0.00"
//           required/>
//         <br></br>
//         <label from="alcoholContent"> Alcohol Content: </label>
//         <input
//           type = "text"
//           name = "alcoholContent"
//           placeholder = "by number"
//           required/>
//         <br></br>
//         <button type = 'submit'>{props.buttonText}</button>
//       </form>
//     </>
//   );
// }

// ReusableForm.propTypes = {
//   formSubmissionHandler: PropTypes.func,
//   buttonText: PropTypes.string
// };

// export default ReusableForm;