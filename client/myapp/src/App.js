import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import CreateNewNovel from "./pages/CreateNewNovel";
import SearchResult from "./pages/SearchResult";
import ReaderChapter from "./pages/ReaderChapter";
import WriterChapter from "./pages/WriterChapter";

const App = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route
        path="/create/novel"
        element={<CreateNewNovel />}
      />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/novel-list/novel/:title" element={<ReaderChapter />} />
      <Route
        path="/novel-list/writer/novel/:title"
        element={<WriterChapter />}
      />
    </Routes>
  );
};

export default App;
