import NovelItem from "./NovelItem";

const NovelList = ({ title, value }) => {
  console.log(value);
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {value.map((novelData, idx) => (
          <li>
            <NovelItem data={novelData} ilstId={idx} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NovelList;
