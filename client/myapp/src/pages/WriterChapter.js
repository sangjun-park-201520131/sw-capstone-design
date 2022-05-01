import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

// /info/novel/:novelId

const WriterChapter = () => {
  const [novelData, setNovelData] = useState();
  const [chapterData, setChapterData] = useState();
  // 데이터를 가져오는 작업
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    const getNovelDataFromNovelId = async () => {
      const response = await axios.get(`http://localhost:8081/info/novel/${data.novelId}`, {
        credentials: "same-origin",
      });
      const responseData = await response.data;
      setNovelData(responseData);
    };

    const getChapterDataFromNovelId = async () => {
      const response = await axios.get(`http://localhost:8081/list/novel/${data.novelId}`, {
        credentials: "same-origin",
      });
      const responseData = await response.data;
      setChapterData(responseData);
    };

    getNovelDataFromNovelId();
    getChapterDataFromNovelId();
  }, []);

  console.log(chapterData);

  const state =
    location.state || JSON.parse(localStorage.getItem("currentNovel"));
  if (location.state)
    localStorage.setItem("currentNovel", JSON.stringify(location.state));

  return (
    <>
      <Link
        to={`/novel-list/writer/novel/editor/${state.title}`}
        state={{
          title: data.title,
          novelId: data.novelId,
        }}
      >
        <button>챕터 작성하기</button>
      </Link>
    </>
  );
};

export default WriterChapter;
