import ToastUIViewer from './ToastUIViewer';
import { useLocation } from 'react-router-dom';

const Viewer = () => {
  const location = useLocation();

  return (
  <>
    <h1>뷰어</h1>
    <ToastUIViewer illustId={location.state.selectedIllustId} />
  </>
  );
}

export default Viewer;