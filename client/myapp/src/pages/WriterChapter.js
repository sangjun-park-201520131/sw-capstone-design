import { useLocation } from "react-router-dom";

const WriterChapter = () => {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return <button>챕터 등록하기</button>;
};

export default WriterChapter;
