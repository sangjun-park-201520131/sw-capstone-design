import NavigationBar from "../components/NavigationBar";
import GlobalStyle from "../GlobalStyle";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <h1>메인페이지!</h1>
    </>
  );
};

export default Main;
