import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const IllustList = () => {
  const location = useLocation();
  const bearerToken = localStorage.getItem('bearerToken');
  const { chapterId, novelId } = location.state;

  useEffect(() => {
    const getIllustListDataFromServer = async () => {
      const responseData = await axios.get(`http://localhost:8081/list/illust/${novelId}/${chapterId}`, {
        headers: {
          Authorization: `Bearer ${bearerToken || ""}`,
        },
        credentials: "same-origin",
      });
      
      console.log(responseData);
    };

    getIllustListDataFromServer();
  }, []);

  return <h4>일러스트 목록</h4>
};

export default IllustList;