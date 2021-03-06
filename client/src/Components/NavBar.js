import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {HamburgerMenu} from "./HamburgerMenu";
import {useHistory} from "react-router-dom";

import firebaseConfig from "../Firebase/firebase-config";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 70px;

  border-bottom: 1px solid #fff;
`;

const useStyles = makeStyles((theme) => ({
  NavbarContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    height: "70px",
    width: "100%",
    borderBottom: "1px solid #FFFF",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  paper: {
    padding: "10px",

    margin: "10px",
  },

  toggle: {
    margin: "50px",
  },
  btnRegister: {
    zIndex: 3,
    borderRadius: "25px",
    border: "2px solid #ffff",
    padding: "7px",
    fontSize: "20px",
    color: "white",
    marginTop: "10px",
    marginBottom: "5px",
    marginRight: "3px",
  },
  btnHome: {
    zIndex: 3,
    borderRadius: "25px",
    border: "2px solid #ffff",
    padding: "7px",
    fontSize: "20px",
    color: "white",
    marginTop: "10px",
    marginBottom: "5px",
    marginRight: "10px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const [text, setText] = useState("Login");
  const [user, setUser] = useState(firebaseConfig.auth().currentUser);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    if (user) {
      setText("Logout");
    } else {
      setText("Login");
    }
  }, [user]);

  const onClickButtonRegister = async () => {
    if (user) {
      await firebaseConfig.auth().signOut();
    } else {
      history.push("/Registeration");
    }
  };

  return (
    <NavbarContainer>
      <HamburgerMenu />

      <Button className={classes.btnRegister} onClick={onClickButtonRegister}>
        {text}
      </Button>

      <Button className={classes.btnHome} href="/Home">
        Home
      </Button>
    </NavbarContainer>
  );
};

export default NavBar;
