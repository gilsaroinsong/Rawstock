import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const { uid } = useParams();
  const [nama, setNama] = useState("");
  const [noTelp, setNoTelp] = useState("");
  return (
    <div>
      <div className="topnav">
        <a href={`/dashboard/${uid}`}>RAWSTOCK</a>
        <a href={`/upload/${uid}`}>Upload Image</a>
        <a href={`/history/${uid}`}>History</a>
        <a className="active" href={`/profile/${uid}`}>
          Profile
        </a>
        <a href={`/about/${uid}`}>About</a>
      </div>

      <br />

      <h1 style={{ textAlign: "center" }}>Edit Profile</h1>
      <div
        className="cards-container  "
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: 30,
        }}
      >
        <div className="card pt-3" style={{ padding: 20 }}>
          <Input
            className="form-control"
            placeholder="Masukkan Nama"
            label="Nama Lengkap"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />
          <Input
            className="form-control"
            placeholder="Masukkan No Telp"
            label="No Telepon"
            value={noTelp}
            onChange={(event) => setNoTelp(event.target.value)}
          />
          <br />
          <div style={{ alignSelf: "center" }}>
            <Button text="Simpan" color="green" textColor="white" />
            <Link to={`/profile/${uid}`} style={{ textDecoration: "none" }}>
              <Button text="Kembali" color="grey" textColor="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
