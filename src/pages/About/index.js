import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { uid } = useParams();
  return (
    <div>
      <div class="topnav">
        <a href={`/dashboard/${uid}`}>RAWSTOCK</a>
        <a href={`/upload/${uid}`}>Upload Image</a>
        <a href={`/history/${uid}`}>History</a>
        <a href={`/profile/${uid}`}>Profile</a>
        <a className="active" href={`/about/${uid}`}>
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

export default About;
