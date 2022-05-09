import Login from './/components/Login';
import Register from './/components/Register';
import UserDashboard from './/components/UserDashboard';
import UserPosts from './/components/UserPosts';
import EditForm from './/components/EditForm';
import ViewProfile from './/components/ViewProfile';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/UserDashboard/:username" element={<UserDashboard />} />
          <Route path="/EditForm/:id" element={<EditForm />} />
          <Route path="/UserPosts/:id" element={<UserPosts />} />
          <Route path="/ViewProfile" element={<ViewProfile />} />
        </Routes>

      </BrowserRouter>
    </div>

  );

}

export default App;