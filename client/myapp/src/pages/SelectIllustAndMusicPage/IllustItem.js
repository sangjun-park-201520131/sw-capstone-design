const IllustItem = (props) => {

  const selectIllustHandler = () => {
    props.setSelectedIdData(props.illustId);
  }  

  return <li onClick={selectIllustHandler}>
    <img 
      src={props.url}
      width="300px"
    />
    <h4>{props.artist}</h4>
  </li>
};

export default IllustItem;