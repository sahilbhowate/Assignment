import Swal from 'sweetalert2';
import React from "react";
import { useNavigate } from 'react-router-dom';

function Register() {

  //initialize the userObj state varaible object
  const [userObj, setUserObj] = React.useState({ userName: "", email: "", gender: "", phoneNumber: "", password: "" });

  //initialize the userObjCollection state variable
  const [userObjCollection, setCollection] = React.useState([]);

  const navigate = useNavigate();

  function recordUserInput(event) {
    setUserObj({ ...userObj, [event.target.name]: event.target.value });
  }

  function validateAndStore() {

    // console.log(userObj);
    setCollection([...userObjCollection, userObj]);
    // console.log(userObjCollection);

    Swal.fire(
      "Your account has been created successfully.",
      "Enjoy our services",
      "success"
    ).then(() => {
      navigate('/');  //routing to Login component after clicking on the OK button
    });

  }

  return (

    <div class="container">

      <h1>Registration Form</h1>

      {/* <!-- dynamically add "is-invalid" class to the input tag using js. So that the input field appears red whenever the
      Username is invalid -->
      <!-- dynamically change the text color of the small tag's contents to red or green repectively using js-->
      <!-- username input below --> */}
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">User Name</label>
        <input type="text" class="form-control" id="naam" aria-describedby="emailHelp"
          placeholder="Enter your username" onChange={recordUserInput} name="userName" />
        <small></small>
      </div>

      {/* <!-- email input --> */}
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="text" class="form-control" id="email" aria-describedby="emailHelp" onChange={recordUserInput} name="email" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>

      {/* <!-- select menu for choosing the gender --> */}
      <select id="gender" class="form-select" aria-label="Default select example" onChange={recordUserInput} name="gender">
        <option selected>Select Your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <small id="genderErrorMsg"></small>
      <br />

      {/* <!-- Phone Number input --> */}
      <div class="mb-3">
        <label for="examplePhoneInput1" class="form-label">Enter Your Phone Number</label>
        <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" onChange={recordUserInput} name="phoneNumber" />
        <div id="emailHelp" class="form-text">We'll never share your contact details with anyone else.</div>
      </div>

      {/* <!-- Password input --> */}
      <div class="mb-3">
        <label for="examplePhoneInput1" class="form-label">Enter Your Password</label>
        <input type="password" class="form-control" id="passwordOfUser" aria-describedby="emailHelp" onChange={recordUserInput} name="password" />
        <div id="emailHelp" class="form-text">Type a strong password.</div>
      </div>

      {/* <!-- Confirm Password input --> */}
      <div class="mb-3">
        <label for="examplePhoneInput1" class="form-label">Please again confirm the password </label>
        <input type="password" class="form-control" id="confirmPasswordOfUser" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">Please confirm password.</div>
      </div>

      {/* <!-- button component--> */}
      <button id="submitBtn" class="btn btn-primary" onClick={validateAndStore}>submit</button>

    </div>

  );

}

export default Register;