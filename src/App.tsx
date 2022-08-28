import { useEffect, useState } from 'react';
import { getData } from './api';
import './App.scss';
import { BanerList } from './components/BanerList';
import { BanerData } from './types/BanerData';

export const App = () => {
  const [baner, setBaner] = useState<BanerData>();
  const [isError, setError] = useState(false);

  const request = async () => {
    const res = await getData();

    if ('Error' in res) {
      setError(true);

      return;
    }

    setBaner(res);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        {!isError && <BanerList baner={baner} />}
      </div>
    </div>
  );
};
