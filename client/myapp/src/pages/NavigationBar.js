import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <h2>네비게이션 바</h2>
      <Link to="/mypage">마이페이지</Link>
      <Link to="/create/novel">새 소설 등록</Link>
      <Link to="/search">검색</Link>
    </>
  );
};
export default NavigationBar;
