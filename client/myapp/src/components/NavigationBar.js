import React from"react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./NavigationBar.css";
import SearchIcon from '@material-ui/icons/Search'; 


const clientId =
  "112172327061-95mqb878sgpt8t955rkkdug7mvgco8od.apps.googleusercontent.com";

const NavigationBar = () => {
  // 로그인 여부를 확인할 수 있는 state를 생성
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bearerToken, setBearerToken] = useState(null);

  // 로그인/로그아웃
  useEffect(() => {
    setTimeout(() => {
      const start = () => {
        gapi.client.init({
          clientId: clientId,
          scope: "",
        });
      };
      gapi.load("client:auth2", start);
  
      const getBearerToken = localStorage.getItem("bearerToken");
      setBearerToken(getBearerToken);
    }, 500)
  }, []);

  return (
    <>
      <div className="NavigationBar">
        <a href="/"><img className="navbar-logo" src = "assets/navbar-logo.svg"/></a>
        <div className="navbar_search">
          <input className="navbar_searchInput" type="/text"></input>
          <a href="/search"><SearchIcon className="navbar_searchIcon"></SearchIcon></a>
        </div>
        <div className="navbar_menu">
          <a className="navbar_option" href="Mypage">
            마이페이지
          </a>
          <a className="navbar_option" href="create/novel">
            새 소설 등록
          </a>
        </div>
        {!isLoggedIn && <LoginButton loginHandler={setIsLoggedIn} />}
        {isLoggedIn && <LogoutButton logoutHandler={setIsLoggedIn} />}
      </div>
    </>
  );
};
export default NavigationBar;
