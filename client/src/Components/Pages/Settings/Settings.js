import "./Settings.css";
import React, { useContext, useState, useMemo } from "react";
import { Button } from "@material-ui/core";
import Select from "react-select";
import countryList from "react-select-country-list";

import { SocketContext } from "../../../Context/SocketContext";

function Settings() {
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = React.useState("");

  const coutriesOptions = useMemo(() => countryList().getData(), []);

  const ageTypes = [
    { value: "18-30", label: "18-30" },
    { value: "30-40", label: "30-40" },
    { value: "40-50", label: "40-50" },
    { value: "50+", label: "50+" },
    { value: "60+", label: "60+" },
    { value: "70+", label: "70+" },
    { value: "80+", label: "80+" },
  ];

  const changeCountryHandler = (value) => {
    setCountry(value);
  };

  const changeAgeHandler = (value) => {
    setAge(value);
  };

  const { myVideo } = useContext(SocketContext);
  const handleSubmit = () => {
    // save changes
  };
  const onClickMale = () => {
    setGender("male");
  };
  const onClickFemale = () => {
    setGender("female");
  };
  return (
    <div className="settings-container">
      <video playsInline muted autoPlay ref={myVideo} className="video-large" />
      <div className="settings-card">
        <h1 style={{ color: "white" }}>Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="content-container">
            <div className="row-center">
              <div className="culomn-center">
                <div className="row-center">
                  <div className="lable-big">I am a: </div>
                  <Button style={{ marginLeft: "10px" }}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={"images/male.png"}
                      onClick={onClickMale}
                    />
                  </Button>

                  <Button style={{ marginLeft: "10px" }}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={"images/female.png"}
                      onClick={onClickFemale}
                    />
                  </Button>
                </div>

                <div className="row-center">
                  <div className="lable-big">From: </div>
                  <Select
                    className="row-box"
                    options={coutriesOptions}
                    value={country}
                    onChange={changeCountryHandler}
                  />
                </div>

                <div className="row-center">
                  <div className="lable-big">Ages: </div>
                  <Select
                    className="row-box"
                    options={ageTypes}
                    value={age}
                    onChange={changeAgeHandler}
                  />
                </div>
              </div>

              <div className="culomn-center">
                <div className="row-center">
                  <div className="lable-big">Looking for: </div>
                  <Button style={{ marginLeft: "10px" }}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={"images/male.png"}
                      onClick={onClickMale}
                    />
                  </Button>

                  <Button style={{ marginLeft: "10px" }}>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={"images/female.png"}
                      onClick={onClickFemale}
                    />
                  </Button>
                </div>
                <div className="row-center">
                  <div className="lable-big"> From: </div>
                  <Select
                    className="row-box"
                    isSearchable={true}
                    options={coutriesOptions}
                    value={country}
                    onChange={changeCountryHandler}
                  />
                </div>

                <div className="row-center">
                  <div className="lable-big">Ages: </div>
                  <Select
                    className="row-box"
                    options={ageTypes}
                    value={age}
                    onChange={changeAgeHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;