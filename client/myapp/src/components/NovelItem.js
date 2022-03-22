// novelTitle: "",
// novelGenre: "fantasy",
// selectedImage: null,
// novelDescription: "",
// userId: userAccount.userId,
// novelId: uuidv4(),

const NovelItem = ({ data, listId }) => {
  return (
    <>
      <h3>{data.novelTitle}</h3>
      {/* 'px' 부분은 임시적으로 한 것이니 바꾸어야 한다. */}
      <img src={data.selectedImage.src} width="300px" alt={listId} />
      <p>작가: {data.userId}</p>
      <p>장르: {data.novelGenre}</p>
    </>
  );
};

export default NovelItem;
