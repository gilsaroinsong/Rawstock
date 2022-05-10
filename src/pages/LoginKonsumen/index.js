import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import firebase from "../../config/Firebase";
import { useNavigate, Link } from "react-router-dom";
import "../../App.css";

const LoginKonsumen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = () => {
    const dataSub = {
      email: email,
      password: password,
    };
    //console.log(dataSub);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const uid = res.user.uid;
        Navigate(`/dashboardKonsumen/${uid}`);
      })
      .catch((error) => console.log("Error", error));
  };

  return (
    <div className=" background cards-container">
      <div
        style={{
          marginLeft: "33%",
          marginRight: "33%",
          marginTop: "0%",
        }}
      >
        <div className="loginContainer card pt-3 " style={{ padding: 20 }}>
          <h3>Login Konsumen</h3>
          <Input
            className="form-control form-control-sm"
            label="Email"
            placeholder="Masukan email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            className="form-control form-control-sm"
            label="Password"
            placeholder="Masukan password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <br />
          <Button
            onSubmit={handleSubmit}
            //className="loginContainer"
            color="black"
            textColor="white"
            text="Masuk"
          />

          <Link to="/registerKonsumen" style={{ textDecoration: "none" }}>
            <Button color="grey" textColor="white" text="Register" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginKonsumen;
