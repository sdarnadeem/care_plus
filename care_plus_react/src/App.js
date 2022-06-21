import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import IsLoading from "./components/isLoading/IsLoading";
import DashBoard from "./components/dashBoard/DashBoard";
import UserContext from "./components/useContext/UserContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getUserDataApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getUserData");
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      navigate("/login");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserDataApi();
  }, []);

  return (
    <UserContext>
      {isLoading ? (
        <IsLoading />
      ) : (
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<DashBoard />} />
        </Routes>
      )}
    </UserContext>
  );
};

export default App;
