import React from "react";
import Navbar from "./Component/Navbar";
import Registered from "./Component/Credintial/Registered";
import Login from "./Component/Credintial/Login";
import Banner from "./Component/Banner/Banner";
import { Routes, Route } from "react-router-dom";
import Mainstores from "./Component/Stores/MainStores";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route exact path="register" element={<Registered />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="store" element={<Mainstores />} />
      </Routes>
      <Footer/>
      <div className="space h-[300px]"></div>
    </React.Fragment>
  );
};

export default App;
