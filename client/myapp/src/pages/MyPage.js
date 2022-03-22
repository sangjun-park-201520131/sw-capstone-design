import { Link } from "react-router-dom";
import styled from "styled-components";

import NavigationBar from "../components/NavigationBar";
import GlobalStyle from "../GlobalStyle";
import CurrentPoint from "../components/CurrentPoint";
import NovelList from "../components/NovelList";
import userAccount from "../components/userAccount";
import { useEffect, useState } from "react";

const StyledLink = styled(Link)`
  //some CSS styles here
`;

const MyPage = () => {
  const currentWritingNovelList = [...userAccount.writingNovelList];

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <h1>마이페이지</h1>
      <br />
      <br />
      <CurrentPoint />
      <br />
      <br />
      <NovelList title="내가 쓴 소설 목록" value={currentWritingNovelList} />
      {/* <NovelList title="구매한 소설 목록" value={currentPurchasedNovelList} /> */}

      <Link to="/novel-list/novel/harrypotter">해리포터</Link>
      <Link to="/novel-list/novel/gameofthrones">왕좌의 게임</Link>
      <Link to="/novel-list/writer/novel">소설2</Link>
    </>
  );
};

export default MyPage;
