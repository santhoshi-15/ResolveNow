import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/user/HomePage";
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";
import Complaint from "./components/user/Complaint";
import Status from "./components/user/Status";
import AdminHome from "./components/admin/AdminHome";
import AgentHome from "./components/agent/AgentHome";
import UserInfo from "./components/admin/UserInfo";
import Home from "./components/common/Home";
import AgentInfo from "./components/admin/AgentInfo";

function App() {
  const isLoggedIn = !!localStorage.getItem("user");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {isLoggedIn ? (
          <>
            <Route path="/AgentInfo" element={<AgentInfo />} />
            <Route path="/AgentHome" element={<AgentHome />} />
            <Route path="/UserInfo" element={<UserInfo />} />
            <Route path="/AdminHome" element={<AdminHome />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/Complaint" element={<Complaint />} />
            <Route path="/Status" element={<Status />} />
          </>
        ) : (
          // Redirect to Login if not logged in
          <Route path="*" element={<Navigate to="/Login" replace />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
