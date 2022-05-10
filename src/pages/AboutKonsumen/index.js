import React from "react";
import { useParams } from "react-router-dom";

const AboutKonsumen = () => {
  const { uid } = useParams();
  return (
    <div>
      <div class="topnav">
        <a href={`/dashboardKonsumen/${uid}`}>RAWSTOCK</a>
        <a href={`/historyKonsumen/${uid}`}>History</a>
        <a href={`/profileKonsumen/${uid}`}>Profile</a>
        <a className="active" href={`/aboutKonsumen/${uid}`}>
          About
        </a>
      </div>

      <div>
        <div class="about-section">
          <h1>RAWSTOCK</h1>
          <p>
            RAWSTOCK merupakan sebuah web yang memungkinkan penggunanya untuk
            melakukan transaksi jual beli gambar mentah (RAW). Dimana RAW
            merupakan format gambar yang saat pengambilannya tidak melewati
            proses apapun sehingga menghasilkan gambar dengan detail dan jelas
            sehingga gambar yang akan dijual pada website ini memiliki kualitas
            yang sangat tinggi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutKonsumen;
