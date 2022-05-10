import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";
import { Link } from "react-router-dom";

const EditProfileKonsumen = () => {
  const { uid } = useParams();
  const [nama, setNama] = useState("");
  const [noTelp, setNoTelp] = useState("");
  return (
    <div>
      <div className="topnav">
        <a href={`/dashboardKonsumen/${uid}`}>RAWSTOCK</a>
        <a href={`/historyKonsumen/${uid}`}>History</a>
        <a className="active" href={`/profileKonsumen/${uid}`}>
          Profile
        </a>
        <a href={`/aboutKonsumen/${uid}`}>About</a>
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
            <Link
              to={`/profileKonsumen/${uid}`}
              style={{ textDecoration: "none" }}
            >
              <Button text="Kembali" color="grey" textColor="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileKonsumen;
