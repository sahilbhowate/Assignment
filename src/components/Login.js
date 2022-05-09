import { Link } from 'react-router-dom';
import React from 'react';

function Login() {

  const [userName, setUsername] = React.useState({ uName: "" });

  function recordName(event) {
    setUsername({ ...userName, [event.target.name]: event.target.value })
  }

  return (
    <div className="container">

      <h1>Login to your account</h1>
      <div className="mb-3">
        <label className="form-label">Enter The User Name</label>
        <input type="text" className="form-control" placeholder="User Name" onChange={recordName} name="uName" />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>

      <Link to={`/UserDashboard/${userName.uName}`}>
        <button type="button" className="btn btn-success">Login</button>
      </Link>

      <span><h4>Not a member ? <Link to="/Register">Register Here</Link></h4></span>

    </div>
  );

}
export default Login;