//import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [details, setDetails] = useState([]);

  const userData = { name, email, password };
  //console.log("User data", userData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-2024-pvka.onrender.com/api/submit/",
        /* "http://localhost:5000/api/submit/", */
        userData
      );
      setDetails(response.data.details);
      //console.log(response);
      //console.log(response.data);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }

    //console.log("Clicked");
  };
  //console.log(details);

  return (
    <div>
      <form>
        <label>
          Name: &nbsp;
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email: &nbsp;
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password: &nbsp;
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
      {details.map((user) => {
        return (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
