import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LogoutButton from "./LogoutButton";

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
      <Link to="/mypage">마이페이지</Link>
      <Link to="/create/novel">새 소설 등록</Link>
      <Link to="/search">검색</Link>
      <LoginButton />
      <LogoutButton />
    </>
  );
};
export default NavigationBar;
