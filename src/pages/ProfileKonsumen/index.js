import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../config/Firebase";
import "../../App.css";
import Button from "../../components/atom/Button";
import { Link } from "react-router-dom";

const ProfileKonsumen = () => {
  const { uid } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    firebase
      .database()
      .ref(`users/konsumen/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setProfile(res.val());
        }
        // setFirstName(SplitFullName(users.fullName));
      });
  }, []);
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

      <div
        className="cards-container  "
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: 30,
        }}
      >
        <div className="card pt-3">
          <header style={{ alignSelf: "center" }}>
            <div className="avatar">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Jhon Doe"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </header>
          <br />
          <div style={{ alignSelf: "center" }}>
            <h6>Full Name</h6>
            <h4>{profile.fullName}</h4>
            <br />
            <h6>Email</h6>
            <h4>{profile.email}</h4>
            <br />
            <h6>Phone</h6>
            <h4>{profile.noTelp}</h4>
          </div>

          <br />

          <div style={{ alignSelf: "center" }}>
            <Link
              to={`/editProfileKonsumen/${uid}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                text="Edit Profile"
                color="#333"
                textColor="white"
                width={300}
              />
            </Link>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button text="Keluar" color="red" textColor="white" width={300} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileKonsumen;
