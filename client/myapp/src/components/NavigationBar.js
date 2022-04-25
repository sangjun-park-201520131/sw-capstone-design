import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LogoutButton from "./LogoutButton";
import styles from "./NavigationBar.module.css";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
  span,
} from "react-bootstrap";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const clientId =
  "112172327061-95mqb878sgpt8t955rkkdug7mvgco8od.apps.googleusercontent.com";

const NavigationBar = () => {
  // 로그인/로그아웃
  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", start);
  }, []);

  return (
    <>
      <div className="NavigationBar">
        <Navbar bg="myColor" variant="dark">
          <Navbar.Brand href="./">
            <img src={logo} />{" "}
          </Navbar.Brand>
          <Nav>
            <div class="container-fluid">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="검색어를 입력하세요"
                  aria-label="Search"
                ></input>
                <button class="btn btn-light" type="submit">
                  Search
                </button>
              </form>
            </div>
            <li class="nav-item">
              <a class="nav-link" href="Create/Novel">
                새 소설 등록
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Mypage">
                마이페이지
              </a>
            </li>
          </Nav>
          <LoginButton />
          <LogoutButton />
        </Navbar>
      </div>
    </>
  );
};
export default NavigationBar;
