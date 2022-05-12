import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import IllustList from './IllustList';
import MusicList from './MusicList';
import { useState } from 'react';


const SelectIllustAndMusic = () => {
  const location = useLocation();
  const [selectedIllustItem, setSelectedIllustItem] = useState(null);
  const [selectedIllustId, setSelectedIllustId] = useState(null);
  const [selectedMusicItem, setSelectedMusicItem] = useState(null);
  const [selectedMusicId, setSelectedMusicId] = useState(null);
  const novelId = location.state.novelId;
  const chapterId = location.state.chapterId;  

  const deleteSelectedHandler = () => {
    setSelectedIllustItem(null);
    setSelectedIllustId(null);
    setSelectedMusicItem(null);
    setSelectedMusicId(null);
  }

  return (
    <div>
      <h1>일러스트/음악 선택</h1>
      <IllustList state={{
        ...location.state
      }} selectHandler={setSelectedIllustItem} selectIdHandler={setSelectedIllustId} select={selectedIllustItem}/>
      <MusicList state={{
        ...location.state
      }} selectHandler={setSelectedMusicItem} selectIdHandler={setSelectedMusicId} select={selectedMusicItem}/>
      <Link to={`/novel-list/novel/${location.state.chapterId}/viewer`} state={{
        ...location.state,
        novelId, 
        chapterId, 
        selectedIllustId,
        selectedMusicId,
      }} >
         <button>챕터 읽기</button>
      </Link>
      <button onClick={deleteSelectedHandler}>선택 취소하기</button>
    </div>
  );
}

export default SelectIllustAndMusic