import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import styled from "styled-components";

const StyledLink = styled(Link)`
  //some CSS styles here
`;

const MyPage = () => {
  return (
    <>
      <h1>마이페이지</h1>
      <NavigationBar />
      <Link to="/novel-list/novel/harrypotter">해리포터</Link>
      <Link to="/novel-list/novel/gameofthrones">왕좌의 게임</Link>
      <Link to="/novel-list/writer/novel">소설2</Link>
    </>
  );
};

export default MyPage;
