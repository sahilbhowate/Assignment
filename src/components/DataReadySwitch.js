import DisplayData from './DisplayData';

function DataReadySwitch(props) {

  if (props.isDataReady === true) {
    return (
      <>
        <DisplayData empData={props.empData} deleteRecord={props.deleteRecord} editRecord={props.editRecord} viewRecord={props.viewRecord} />
      </>
    );
  }

  else if (props.isDataReady === false) {
    return (
      //display table with no rows
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


            </tbody>
          </table>
        </div>
      </>

    );

  }
}

export default DataReadySwitch;