import React from "react";

import { Link } from "react-router-dom";
import Button from "../../components/atom/Button";

const HomePage = () => {
  return (
    <div className="background">
      <div
        className="cards-container  "
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: 30,
        }}
      >
        <div className="card pt-3" style={{ padding: 20 }}>
          <div style={{ textAlign: "center", text: "bold" }}>
            <h1>Selamat Datang</h1>
            <h2>di RAWSTOCK</h2>
            <br />
            <h4>Masuk Sebagai</h4>
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Link to={`/login`} style={{ textDecoration: "none" }}>
              <Button
                text="Contributor"
                textColor="white"
                color="black"
                height={70}
              />
            </Link>
            <Link to={`/loginKonsumen`} style={{ textDecoration: "none" }}>
              <Button
                text="Konsumen"
                textColor="white"
                color="black"
                height={70}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
