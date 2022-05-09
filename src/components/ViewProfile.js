import React from 'react';
import { useLocation } from 'react-router-dom';
import profile_pic from "./profile_pic.png";

function ViewProfile() {

  const location = useLocation();

  // console.log(location.state);

  return (
    <>

      <h1>ViewProfile Component</h1>

      <div className="card mb-3" style={{ "maxWidth": "540px","marginTop":"30px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={profile_pic} className="img-fluid rounded-start" alt="profile_pic" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Information about the user</h5>
              <p className="card-text">Name: {location.state.name} </p>
              <p className="card-text">Email: {location.state.email} </p>
              <p className="card-text">Phone: {location.state.phone}</p>
              <p className="card-text">City: {location.state.city} </p>
              <p className="card-text">Id No: {location.state.id}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ViewProfile;