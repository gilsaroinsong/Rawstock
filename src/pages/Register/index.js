import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import firebase from "../../config/Firebase";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noTelp, setNoTelp] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const data = {
          email: email,
          fullName: nama,
          noTelp: noTelp,
          history: "",
        };
        const userId = userCredential.user.uid;
        console.log(userId);
        firebase.database().ref(`users/contributor/${userId}`).set(data);

        setNama("");
        setEmail("");
        setPassword("");

        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   const handleSubmit = () => {
  //     const dataRegis = {
  //       nama: nama,
  //       email: email,
  //       password: password,
  //     };
  //     console.log(dataRegis);
  //   };

  return (
    <div className="background cards-container">
      <div
        style={{
          marginLeft: "33%",
          marginRight: "33%",
          marginTop: "-4.5%",
        }}
      >
        <div className="registerContaine card pt-3 " style={{ padding: 30 }}>
          <h3>Register</h3>

          <Input
            className="form-control"
            placeholder="Masukan Nama"
            label="Full Name"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />

          <Input
            className="form-control"
            placeholder="Masukan No"
            label="No Telepon"
            value={noTelp}
            onChange={(event) => setNoTelp(event.target.value)}
          />

          <Input
            className="form-control"
            placeholder="Masukan Email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            className="form-control"
            placeholder="Masukan Password"
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <Button
            onSubmit={handleSubmit}
            color="black"
            textColor="white"
            text="Register"
          />

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button color="red" textColor="white" text="Kembali" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
