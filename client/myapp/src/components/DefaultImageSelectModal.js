import { useState } from "react";
import Card from "../UI/Card";

const DefaultImageSelectModal = ({ title }) => {
  const [imageSelected, setImageSelected] = useState(false);
  const [currentSelectedIdx, setCurrentSelectedIdx] = useState("");

  const selectThisImageHandler = () => {};

  const selectClickedImage = (event) => {
    setImageSelected(true);
  };

  const srcLists = [
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
  ];

  return (
    <Card>
      <header>
        <h1>이미지 선택하기</h1>
        <h4>이미지를 선택해 주세요</h4>
      </header>
      <main>
        <ul className="images-grid">
          {srcLists.map((srcURL, idx) => {
            return (
              <li key={idx}>
                <img
                  src={srcURL}
                  alt={`default-img ${idx}`}
                  onClick={selectClickedImage}
                />
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <button
          onClick={selectThisImageHandler}
          className={!imageSelected ? "disabled" : ""}
        >
          선택하기
        </button>
        <button>취소</button>
      </footer>
    </Card>
  );
};

export default DefaultImageSelectModal;
