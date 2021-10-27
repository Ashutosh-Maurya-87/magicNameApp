import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState({ fname: "Ashutosh ", lname: "Maurya" });

  const getName = () => {
    setName({
      fname: "Ashu",
      lname: "Maurya",
    });
    console.log(name);
    console.log("you find name ashu");
  };

  return (
    <>
      <h3>
        {name.fname}
        {name.lname}
      </h3>
      <button onClick={getName}>Get Name</button>
    </>
  );
};

export default Home;
