import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState({
    fname: "Ashutosh ",
    lname: "Maurya",
  });
  const [show, setShow] = useState([]);
  const getName = () => {
    setName({
      fname: "Ashu ",
      lname: "Maurya",
    });
  };
  const getState = () => {
    setShow({
      dist: "Ayodhya",
      state: "UP",
    });
    console.log("show", show);
    console.log("name", name);
  };

  return (
    <>
      <h3>
        {name.fname}
        {name.lname}
        {<br />}
        {show.dist}
        {show.state}
      </h3>
      <button onClick={getName}>{name ? "Get Other Name" : "Get Name"}</button>
      <br />
      <br />
      <button onClick={getState}>Get State</button>
    </>
  );
};

export default Home;
