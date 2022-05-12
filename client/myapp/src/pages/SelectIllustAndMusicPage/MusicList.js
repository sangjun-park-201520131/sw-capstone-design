import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getData } from '../../components/http-request';

const MusicList = ({ selectHandler, selectIdHandler, select }) => {
  const location = useLocation();
  const novelId = location.state.novelId;
  const chapterId = location.state.chapterId;

  useEffect(() => {
    const getMusicItemsDataFromServer = async () => {
      const response = await getData(`list/music/${novelId}/${chapterId}`);
      console.log(response);
    };

    getMusicItemsDataFromServer();
  }, []);

  return <h3>음악 리스트</h3>
}

export default MusicList;