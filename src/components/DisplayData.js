import { Link } from 'react-router-dom';

function DisplayData(props) {
  // console.log(props.empData);
  return (
    <>
      <div className="container dataTableContainerStyle">
        <table className="table table-bordered table-striped table-secondary tableStyle" id="tableId" style={{ "marginTop": "20px" }}>

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {//JSX Expression

              props.empData.map((singleEmpData) => {
                // console.log(singleEmpData);
                return (
                  <tr key={singleEmpData.id}>
                    <td>{singleEmpData.name}</td>
                    <td>{singleEmpData.email}</td>
                    <td>{singleEmpData.phone}</td>
                    <td>{singleEmpData.city}</td>
                    <td>
                      <button type="button" className="btn btn-danger" onClick={() => props.deleteRecord(singleEmpData.id)}>Delete</button>

                      <Link to={`/EditForm/${singleEmpData.id}`}>
                        <button type="button" className="btn btn-info" style={{ "marginLeft": "10px" }}>Edit</button>
                      </Link>

                      <button type="button" className="btn btn-warning" style={{ "marginLeft": "10px" }} onClick={() => props.viewRecord(singleEmpData.id)}>View Profile</button>
                    </td>
                  </tr>
                );
              })

            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayData;