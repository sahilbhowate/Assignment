// json-server --watch employees.json --command to switch on the json server

import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from 'react';
import axios from 'axios';
import DataReadySwitch from './DataReadySwitch';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

function UserDashboard() {

  const [empData, setEmpData] = React.useState([]);

  const [isDataReady, setIsDataReady] = React.useState(false);

  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "", city: "" });

  //info from Login component
  let accountInfoObj = useParams();

  // console.log(useParams());

  //array to store the id of the post
  let id = ["post1", "post2"];

  const navigate = useNavigate();

  //Call the fetchEmployeeData function after the component gets mounted
  useEffect(() => {

    fetchEmployeeData();

  }, []);

  //Function for fetching all the records of employees from employees.json
  function fetchEmployeeData() {

    //upcoming data has not yet reached. So set isDataReady to false.
    setIsDataReady(false);

    const url = "http://localhost:3000/employees";

    axios.get(url).then((receivedJsonData) => {
      // console.log(receivedJsonData.data);
      setIsDataReady(true);
      setEmpData(receivedJsonData.data);
    }
    ).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!. Data was not fetched successfully',
        footer: `<a href="">Why do I have this issue? -- ${error}</a>`
      })
    }
    );
  }

  //onChange event handler function to record the form inputs
  function recordFormData(event) {

    //record the user inputs into the state variable object called formData
    setFormData((previousState) => {
      return { ...previousState, [event.target.name]: event.target.value }
    });

    // console.log(formData);

  }

  //event handler function for clicking the Save Employee Info button
  function postEmployeeData(event) {

    event.preventDefault();        //to avoid the reloading of the page upon clicking

    const url = "http://localhost:3000/employees";

    //post request sent to json server using axios
    axios.post(url, formData).then((response) => {
      // console.log(response);

      if (response.status === 201) {
        Swal.fire(
          'Data Entry Done',
          'Data has been stored successfully',
          'success'
        ).then(() => {    //then block of sweet alert for what to do after clicking OK button
          fetchEmployeeData(); //to update the ui after successfull data entry
        })
      }

    }).catch((error) => {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!. Data not stored successfully',
        footer: `<a href="">Why do I have this issue? -- ${error}</a>`
      })

    }
    );
  }

  //Event listener funvtion for view button
  function viewRecord(id) {

    let viewEmp = empData.find(function (singleEmp) {

      return (singleEmp.id === id);

    });

    // console.log(viewEmp);

    //for just the pupose of viewing the profile ; we use the state object and the navigate() function
    navigate('/ViewProfile', { state: viewEmp })


  }

  //event listener function for the delete button
  function deleteRecord(id) {
    // console.log(id);
    const url = `http://localhost:3000/employees/${id}`;

    axios.delete(url).then((response) => {

      // console.log(response);
      if (response.status === 200) {
        Swal.fire(
          'Record Deleted',
          'Data has been deleted successfully',
          'success'
        ).then(() => {
          fetchEmployeeData(); //to update the ui after successfull data deletion
        })
      }

    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!. Data was not deleted successfully',
        footer: `<a href="">Why do I have this issue? -- ${error}</a>`
      })
    }
    );
  }

  return (
    <div>

      <div className="container">
        <h1>{`Welcome ${accountInfoObj.username} to your dashboard`}</h1>
        <br></br>
        <h2>{`Posts made by ${accountInfoObj.username} are as follows`} </h2>

        <span><h4><Link to={`/UserPosts/${id[0]}`}>{`Click here to see the ${id[0]}`}</Link></h4></span>
        <span><h4><Link to={`/UserPosts/${id[1]}`}>{`Click here to see the ${id[1]}`}</Link></h4></span>

      </div>

      {/* The form section is written below */}
      <div className="container" style={{ "marginTop": "50px" }}>

        {/* Name input box */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
          <input type="text" className="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default" id="inputEmpName" onChange={recordFormData} name="name" />
        </div>

        {/* Email Address input box */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
          <input type="email" className="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default" id="inputEmailId" onChange={recordFormData} name="email" />
        </div>

        {/* Phone Number input box */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
          <input type="text" className="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default" id="inputIdEmp" onChange={recordFormData} name="phone" />
        </div>

        {/* City input box */}
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">City</span>
          <input type="text" className="form-control" aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default" id="inputIdEmp" onChange={recordFormData} name="city" />
        </div>

        {/* div containing 1 button */}
        <div className="ourButtons">

          <button type="button" className="btn btn-success" onClick={postEmployeeData}>Save Employee Info</button>

        </div>

      </div>

      <DataReadySwitch isDataReady={isDataReady} empData={empData} deleteRecord={deleteRecord} viewRecord={viewRecord} />

    </div>

  );


}

export default UserDashboard;