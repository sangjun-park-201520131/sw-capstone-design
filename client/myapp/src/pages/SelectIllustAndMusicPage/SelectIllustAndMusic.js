import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import IllustList from './IllustList';
import { getData } from '../../components/http-request';

const SelectIllustAndMusic = () => {
  const location = useLocation();
  
  return (
    <div>
      <h1>일러스트/음악 선택</h1>
      <IllustList state={{
        ...location.state
      }}/>
      <Link to={`/novel-list/novel/${location.state.chapterId}/viewer`} state={{
        ...location.state
      }}>
         <button>챕터 읽기</button>
      </Link>
    </div>
  );
}

export default SelectIllustAndMusic