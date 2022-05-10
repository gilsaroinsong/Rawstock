import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../config/Firebase";
import "../../App.css";

function History() {
  const { uid } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/contributor/${uid}/history`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map((key) => {
            productArray.push({
              id: key,
              ...rawData[key],
            });
          });
          setHistory(productArray);
        }
      });
  }, []);

  console.log("ini history", history);

  return (
    <div>
      <div className="topnav">
        <a href={`/dashboard/${uid}`}>RAWSTOCK</a>
        <a href={`/upload/${uid}`}>Upload Image</a>
        <a className="active" href={`/history/${uid}`}>
          History
        </a>
        <a href={`/profile/${uid}`}>Profile</a>
        <a href={`/about/${uid}`}>About</a>
      </div>

      <br />

      <div
        className="cards-container card pt-5 "
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "0%",
        }}
      >
        <div style={{ marginLeft: 15, marginTop: -35 }}>
          <h2>Daftar Pembeli</h2>
        </div>
        {history.map((key) => (
          <div className="card" style={{ flexDirection: "row" }}>
            <img
              src={key.gambar}
              style={{
                height: 150,
                width: 150,
                marginLeft: 10,
                marginBottom: 8,
              }}
            />
            <div>
              <h5 style={{ paddingLeft: 6 }}>{key.namaGambar}</h5>
              <h6 style={{ paddingLeft: 6 }}>
                Nama Pembeli : {key.namaPembeli}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
