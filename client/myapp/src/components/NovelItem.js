// novelTitle: "",
// novelGenre: "fantasy",
// selectedImage: null,
// novelDescription: "",
// userId: userAccount.userId,
// novelId: uuidv4(),

import { Link } from "react-router-dom";

const NovelItem = ({ data, listId }) => {

  const coverImageSrcData = data.coverFileName;
  console.log(data);

  return (
    <>
      <Link
        to={`/novel-list/writer/novel/${data.title}`}
        state={{
          title: data.title,
          description: data.description,
          coverImage: data.coverImage,
          howManyChapter: data.currentChapter,
        }}
      >
        <h3 style={{ marginTop: "10px", fontSize: "15px" }}>
          {data.title}
        </h3>
        {<img src={coverImageSrcData} width="300px" alt={listId} />}
      </Link>
      {/* 'px' 부분은 임시적으로 한 것이니 바꾸어야 한다. */}
      <p>작가: {data.nickname}</p>
      <p>장르: {data.genre}</p>
    </>
  );
};

export default NovelItem;
