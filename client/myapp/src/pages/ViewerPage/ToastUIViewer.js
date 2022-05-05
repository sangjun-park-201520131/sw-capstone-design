import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';



const ToastUIViewer = () => {
  const bearerToken = localStorage.getItem('bearerToken');
  const location = useLocation();
  const [viewerContent, setViewerContent] = useState('');
  const {novelId, chapterId} = location.state;

  useEffect(() => {
    const getNovelDataFromServer = async () => {
      const responseData = await axios.get(`http://localhost:8081/content/novel/${novelId}/chapter/${chapterId}`, {
        headers: {
          authorization: `Bearer ${bearerToken || ""}`,
        }
      },{
        credentials: "same-origin",
      })
      const content = await responseData.data.chapterContent;
      setViewerContent(content);
    };
    getNovelDataFromServer();
  }, []);

  return (
    <>
      {viewerContent && <Viewer initialValue={viewerContent} />}
    </>
  )

};

export default ToastUIViewer;