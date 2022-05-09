import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function EditForm() {

  //useParams() returns one object
  const idObject = useParams();

  let id = idObject.id;

  // console.log(useParams());

  // console.log(id);

  const navigate = useNavigate();

  const [editData, setEditData] = React.useState({ name: "", email: "", phone: "", city: "", id: "" });

  const [editDataFlag, setEditDataFlag] = React.useState(false);

  //Call the fetchEmployeeData function after the component gets mounted ; to fetch the data of employee having id given to us by useParams(). It is stored in the variable called id.
  useEffect(() => {

    fetchEmployeeData();

  }, []);

  //Function for fetching the record of employee from employees.json having the id value stored in id variable
  function fetchEmployeeData() {

    //upcoming data has not yet reached. So, set editDataFlag to false.
    setEditDataFlag(false);

    const url = `http://localhost:3000/employees/${id}`;

    axios.get(url).then((receivedJsonData) => {
      // console.log(receivedJsonData.data);
      setEditDataFlag(true);
      setEditData(receivedJsonData.data);
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

  //onChange event handler for form updation
  function recordUpdatedInput(event) {

    setEditData((previousState) => {

      return { ...previousState, [event.target.name]: event.target.value }

    });

  }

  //event handler function for clicking the Update Data button
  function updateData(event) {

    event.preventDefault();

    const url = `http://localhost:3000/employees/${id}`;

    axios.put(url, editData)
      .then((response) => {
        // console.log(response);
        Swal.fire(
          'Data Updated!',
          `Data of the user having id = ${id} has been updated successfully.`,
          'success'
        ).then(() => {   //what should be done after clicking on the ok button of the sweet alert
          navigate(-1);
        });
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!. Data was not updated successfully.',
          footer: `<a href="">Why do I have this issue? --- ${error} </a>`
        });
      })

  }

  if (editDataFlag === true) {

    return (
      <>

        <div className="container">

          <h1>Use the below form to edit the information in employees.json</h1>

          <form>

            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={editData.name} onChange={recordUpdatedInput} name="name" />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={editData.email} onChange={recordUpdatedInput} name="email" />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={editData.phone} onChange={recordUpdatedInput} name="phone" />
            </div>

            <div className="form-group">
              <label>City</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={editData.city} onChange={recordUpdatedInput} name="city" />
            </div>

            <button type="submit" className="btn btn-primary" style={{ "marginTop": "10px" }} onClick={updateData}>Update Data
            </button>

          </form>

        </div>

      </>
    )

  }

}

export default EditForm;