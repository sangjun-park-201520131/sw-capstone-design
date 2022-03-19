import { useState } from "react";
import Card from "../UI/Card";

const DefaultImageSelectModal = ({ title }) => {
  const [imageSelected, setImageSelected] = useState(false);
  const [currentSelectedImageId, setCurrentSelectedImageId] = useState(null);

  const imgList = [
    {
      src: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
      id: 1,
    },
  ];

  const newNovelData = {
    title: null,
    genre: null,
  };

  const imageSelectedHandler = (id) => {
    setCurrentSelectedImageId(id);
    setImageSelected(true);
  };

  const addImageDataInNovelData = (event) => {
    event.preventDefault();
    const selectedImageID = imgList.find(
      (img) => img.id === currentSelectedImageId
    );
  };

  console.log(currentSelectedImageId);

  return (
    <Card>
      <header>
        <h1>이미지 선택하기</h1>
        <h4>이미지를 선택해 주세요</h4>
      </header>
      <main>
        <ul className="images-grid">
          {imgList.map((image, idx) => {
            return (
              <li
                key={idx}
                className={currentSelectedImageId === image.id ? "active" : ""}
              >
                <img
                  src={image.src}
                  alt={`default-img ${idx}`}
                  onClick={() => imageSelectedHandler(image.id)}
                />
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <button
          disabled={!imageSelected}
          onClick={addImageDataInNovelData.bind(this)}
        >
          선택하기
        </button>
        <button>취소</button>
      </footer>
    </Card>
  );
};

export default DefaultImageSelectModal;
