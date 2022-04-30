import DefaultImageSelectModal from "../components/DefaultImageSelectModal";
import { BearerTokenContext } from "../App";
import React, { useState, useReducer, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyle";
import { postData } from "../components/http-request";
import userAccount from "../components/userAccount";

const reducer = (state, action) => {
  if (action.type === "TITLE") {
    return { ...state, title: action.value.trim() };
  }
  if (action.type === "GENRE") {
    return { ...state, genre: action.value };
  }
  if (action.type === "IMAGE") {
    return { ...state, coverImage: action.value };
  }
  return {
    title: "",
    genre: "fantasy",
    coverImage: null,
    novelDescription: "",
  };
};

const CreateNewNovel = () => {
  const { currentToken, setBearerToken } = useContext(BearerTokenContext);
  const descriptionValue = useRef(null);
  const [imageModal, setImageModal] = useState(false);
  const [currentData, changeCurrentData] = useReducer(reducer, {
    title: "",
    description: "",
    genre: "fantasy",
    defaultPrice: 1000,
    coverImage: null,
  });
  const navigate = useNavigate();

  console.log(currentToken);

  const executeModalHandler = (event) => {
    event.preventDefault();
    setImageModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
      ...currentData,
      description: descriptionValue.current.value,
      currentChapter: 0,
    };

    console.log(submitData);

    postData("upload/novel.json", submitData);
    userAccount.writingNovelList.push(submitData);
    navigate("/mypage");
  };

  return (
    <>
      <GlobalStyle />
      <h1>소설 작성하기</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          onChange={(e) =>
            changeCurrentData({ type: "TITLE", value: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="genre">장르</label>
        <select
          id="genre"
          onChange={(e) =>
            changeCurrentData({ type: "GENRE", value: e.target.value })
          }
        >
          <option value="판타지">판타지</option>
          <option value="현대 판타지">현대 판타지</option>
          <option value="로맨스 판타지">로맨스 판타지</option>
          <option value="역사 판타지">역사 판타지</option>
          <option value="SF">SF</option>
          <option value="무협">무협</option>
          <option value="라이트 노벨">라이트 노벨</option>
          <option value="미스터리">미스터리</option>
        </select>
        <br />
        <br />
        <h3>이미지 업로드하기</h3>
        <input type="file" />
        {/* <button onClick={executeModalHandler}>이미지 선택</button> */}
        {imageModal && (
          <DefaultImageSelectModal
            modalOpen={setImageModal}
            selectNovelImg={changeCurrentData}
          />
        )}
        <br />
        <br />
        <label htmlFor="description">작품 소개</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          cols="33"
          placeholder="여기에 작품 소개를 적어주세요"
          ref={descriptionValue}
        />
        <br />
        <br />
        <button type="submit">소설 올리기</button>
      </form>
    </>
  );
};

export default CreateNewNovel;
