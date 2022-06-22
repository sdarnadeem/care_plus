import React, { useEffect, useState, useContext } from "react";
import Login from "./components/login/Login";
import IsLoading from "./reusableComponent/isLoading/IsLoading";
import Dashboard from "./components/dashboard/DashBoard";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "./useContext/UserContext";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { updateAdminData, adminData } = useContext(UserDataContext);
  const getUserDataApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getUserData");
      navigate("/");
      console.log(res.data.admin);
      updateAdminData(res.data.admin);

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
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard adminData={adminData} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
