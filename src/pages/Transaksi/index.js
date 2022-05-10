import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import firebase from "../../config/Firebase";
import Button from "../../components/atom/Button";

const Transaksi = () => {
  const { uid, idGambar } = useParams();
  console.log("ini id gambar", idGambar);
  const navigate = useNavigate();
  const [gambar, setGambar] = useState({});
  const [contributor, setContributor] = useState({});
  const [users, setUsers] = useState({});
  const [idContributor, setIdContributor] = useState("");

  useEffect(() => {
    firebase
      .database()
      .ref(`RAW/${idGambar}`)
      .on("value", (res) => {
        if (res.val()) {
          setGambar(res.val());
          setIdContributor(res.val().idContributor);
          console.log("ini gambar", gambar);
        }
      });
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/contributor/${idContributor}`)
      .on("value", (res) => {
        if (res.val()) {
          setContributor(res.val());
        }
      });
  }, [contributor]);

  console.log(contributor);
  useEffect(() => {
    firebase
      .database()
      .ref(`users/konsumen/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setUsers(res.val());
        }
      });
  }, []);

  const handleSubmit = () => {
    const data = {
      gambar: gambar.gambar,
      namaPembeli: users.fullName,
      namaContributor: contributor.fullName,
      namaGambar: gambar.nama,
    };
    firebase
      .database()
      .ref(`users/contributor/${gambar.idContributor}/history`)
      .push(data);
    firebase.database().ref(`users/konsumen/${uid}/history`).push(data);

    // Hapus Dari  RAW

    firebase.database().ref(`RAW/${idGambar}`).remove();
    navigate(`/dashboardKonsumen/${uid}`);
    console.log("button ditekan");
    // console.log("ini idContributor", idContributor);
  };

  return (
    <div>
      <div className="topnav">
        <a className="active" href={`/dashboardKonsumen/${uid}`}>
          RAWSTOCK
        </a>
        <a href={`/historyKonsumen/${uid}`}>History</a>
        <a href={`/profileKonsumen/${uid}`}>Profile</a>
        <a href={`/aboutKonsumen/${uid}`}>About</a>
      </div>

      <br />

      <div
        className="cards-container card pt-5 "
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: "0%",
        }}
      >
        <div style={{ justifyContent: "center" }}>
          <img
            src={gambar.gambar}
            style={{
              height: 200,
              width: 200,
              marginLeft: "33%",
              marginBottom: 20,
            }}
          />
          <h5 style={{ textAlign: "center" }}>{gambar.nama}</h5>

          <Button
            color="Green"
            textColor="white"
            text="Beli"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
