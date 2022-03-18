import { useState } from "react";
import DefaultImageSelectModal from "../components/DefaultImageSelectModal";
import GlobalStyle from "../GlobalStyle";

const CreateNewNovel = () => {
  const [title, setTitle] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const titleChangeHandler = ({ target: { value } }) => setTitle(value);

  const executeModalHandler = (event) => {
    event.preventDefault();

    setImageModal(true);
  };

  return (
    <>
      <GlobalStyle />
      <h1>소설 작성하기</h1>
      <br />
      <br />
      <form>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleChangeHandler}
        />
        <br />
        <br />
        <label htmlFor="genre">장르</label>
        <select id="genre">
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
        {imageModal && <DefaultImageSelectModal />}
        {/* <label htmlFor="title">태그</label>
        <input
          type="text"
          id="ㅅㅁㅎ"
          value={title}
          onChange={titleChangeHandler}
        /> */}
      </form>
    </>
  );
};

export default CreateNewNovel;
