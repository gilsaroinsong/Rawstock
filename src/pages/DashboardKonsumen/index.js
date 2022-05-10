import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import firebase from "../../config/Firebase";

const DashboardKonsumen = () => {
  const { uid } = useParams();
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`RAW`)
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
          setPictures(productArray);
        }
      });
  }, []);

  return (
    <div>
      <div class="topnav">
        <a class="active" href={`/dashboardKonsumen/${uid}`}>
          RAWSTOCK
        </a>
        {/* <a href={`/upload/${uid}`}>Upload Image</a> */}
        <a href={`/historyKonsumen/${uid}`}>History</a>
        <a href={`/profileKonsumen/${uid}`}>Profile</a>
        <a href={`/aboutKonsumen/${uid}`}>About</a>
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
        <div>
          <div style={{ marginLeft: 15, marginTop: -35 }}>
            <h2>Daftar Gambar</h2>
          </div>
          <div style={{ padding: 20, flexDirection: "row" }}>
            {pictures.map((key) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/Transaksi/${uid}/${key.id}`}
              >
                {" "}
                <img
                  src={key.gambar}
                  style={{
                    height: 150,
                    width: 150,
                    marginLeft: 10,
                    marginBottom: 8,
                  }}
                />
                <h5 style={{ paddingLeft: 6, color: "black" }}>{key.nama}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardKonsumen;
