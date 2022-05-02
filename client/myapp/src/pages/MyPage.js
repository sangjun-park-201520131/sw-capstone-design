import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { getData } from '../components/http-request';
import NavigationBar from "../components/NavigationBar";
import GlobalStyle from "../GlobalStyle";
import CurrentPoint from "../components/CurrentPoint";
import NovelList from "../components/NovelList";
import userAccount from "../components/userAccount";

const MyPage = () => {
  const bearerToken = localStorage.getItem('bearerToken');
  const [data, setData] = useState(null);

  useEffect(() => {

    const getWrittenNovelsData = async () => {
      const response = await axios.get(`http://localhost:8081/written/novel`, {
          headers: {
            Authorization: `Bearer ${bearerToken || ""}`,
          },
          credentials: "same-origin",
        });
      const resData = await response.data;     
      setData(resData);
    }

    setTimeout(() => {
      getWrittenNovelsData();
    }, 1000);
    
    }, [])     


  // console.log(currentWritingNovelList);

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <h1>마이페이지</h1>
      <br />
      <br />
      {!data && <h1>로딩중입니다...</h1>}
      {data && <div>
        <CurrentPoint />
        <br />
        <br />
        <NovelList title="내가 쓴 소설 목록" value={data} />
        {/* <NovelList title="구매한 소설 목록" value={currentPurchasedNovelList} /> */}

        <Link to="/novel-list/novel/harrypotter">해리포터</Link>
        <Link to="/novel-list/novel/gameofthrones">왕좌의 게임</Link>
        <Link to="/novel-list/writer/novel">소설2</Link>
      </div>}
      
    </>
  );
};

export default MyPage;
