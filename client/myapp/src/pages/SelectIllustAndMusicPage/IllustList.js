import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getData } from "../../components/http-request";
import  IllustItem from './IllustItem';


const IllustList = () => {
  const location = useLocation();
  const bearerToken = localStorage.getItem('bearerToken');
  const { chapterId, novelId } = location.state;
  const [urlData, setUrlData] = useState([]);
  const [artistData, setArtistData] = useState([]);
  const [idData, setIdData] = useState([]);
  const [selectedIdData, setSelectedIdData] = useState(null);

  console.log(selectedIdData);

  useEffect(() => {
    const illustList = async () => {
      const getIllustListDataFromServer = await getData(`list/illust/${novelId}/${chapterId}`);
      console.log(getIllustListDataFromServer);
      
      const illustSetIdDataList = getIllustListDataFromServer.map(el => el.illustSetId);
      const urlDataList = getIllustListDataFromServer.map(el => el.coverURL);
      const artistDataList = getIllustListDataFromServer.map(el => el.nickname);

      setUrlData(urlDataList);
      setArtistData(artistDataList);
      setIdData(illustSetIdDataList);
    }

    illustList();
  }, []);

  return (
    <>
      <h4>일러스트 목록</h4>
      {urlData.map((url, idx) => <IllustItem 
        key={idx} 
        url={url}
        artist={artistData[idx]} 
        illustId={idData[idx]}
        setSelectedIdData={setSelectedIdData}
      />)}
    </>
  )

  
};

export default IllustList;