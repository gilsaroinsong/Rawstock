import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/atom/Button";
import firebase from "../../config/Firebase";
import Input from "../../components/atom/Input";

const UploadImage = () => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const [nama, setNama] = useState("");
  const [gambar, setGambar] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setGambar(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = () => {
    const data = {
      gambar: gambar,
      nama: nama,
      idContributor: uid,
    };
    firebase.database().ref(`RAW`).push(data);
    navigate(`/dashboard/${uid}`);
  };

  return (
    <div>
      <div class="topnav">
        <a href={`/dashboard/${uid}`}>RAWSTOCK</a>
        <a className="active" href={`/upload/${uid}`}>
          Upload Image
        </a>
        <a href={`/history/${uid}`}>History</a>
        <a href={`/profile/${uid}`}>Profile</a>
        <a href={`/about/${uid}`}>About</a>
      </div>
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
            placeholder="Masukkan Nama Gambar"
            label="Nama Gambar"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
          />

          <br />

          <h6>Masukkan Gambar</h6>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />

          <br />

          <Button
            color="#333"
            textColor="white"
            text="Upload"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
