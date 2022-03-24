import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/create/novel" element={<CreateNewNovel />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/novel-list/novel/:title" element={<ReaderChapter />} />
      <Route
        path="/novel-list/writer/novel/:title"
        element={<WriterChapter />}
      />
    </Routes>
  );
}

export default App;
