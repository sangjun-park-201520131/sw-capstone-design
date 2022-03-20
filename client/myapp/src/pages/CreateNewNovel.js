import DefaultImageSelectModal from "../components/DefaultImageSelectModal";
import React, { useState, useReducer, useRef } from "react";
import GlobalStyle from "../GlobalStyle";

const reducer = (state, action) => {
  if (action.type === "TITLE") {
    return { ...state, title: action.value.trim() };
  }
  if (action.type === "GENRE") {
    return { ...state, genre: action.value };
  }
  if (action.type === "IMAGE") {
    return { ...state, selectedImage: action.value };
  }
  if (action.type === "DESCRIPTION") {
    return { ...state, description: action.value.trim() };
  }
  return {
    title: "",
    genre: "fantasy",
    selectedImage: null,
    description: "",
  };
};

const CreateNewNovel = () => {
  const descriptionValue = useRef(null);
  const [imageModal, setImageModal] = useState(false);
  const [currentData, changeCurrentData] = useReducer(reducer, {
    title: "",
    genre: "fantasy",
    selectedImage: null,
    description: "",
  });

  const executeModalHandler = (event) => {
    event.preventDefault();
    setImageModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeCurrentData({
      type: "DESCRIPTION",
      value: descriptionValue.current.value,
    });
  };

  console.log(currentData);

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
          <option value="fantasy">판타지</option>
          <option value="modern-fantasy">현대 판타지</option>
          <option value="romance-fantasy">로맨스 판타지</option>
          <option value="history-fantasy">역사 판타지</option>
          <option value="science-fiction">SF</option>
          <option value="muheop">무협</option>
          <option value="light-novel">라이트노벨</option>
          <option value="mistery">미스터리</option>
        </select>
        <br />
        <br />
        <button onClick={executeModalHandler}>이미지 선택</button>
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
