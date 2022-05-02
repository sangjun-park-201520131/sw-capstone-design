const WriterChapterItem = ({ value }) => {
  console.log(value);
  return (
    <li>
      {`${value[1] + 1}화 - ${value[0].title}`}
    </li>
  )
};

export default WriterChapterItem;