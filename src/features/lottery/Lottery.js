import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './lotterySlice';

export default function Lottery() {
  const dispatch = useDispatch();
  const userDatas = useSelector((state) => state.lottery.data);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json');
      const data = await res.json();
      dispatch(getData(data.slice(0, 100)));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {userDatas
      && userDatas.map(
        (user) => (
          <div key={user.id}>
            <img src={`${user.image.thumbnail}`} alt="pokemon" />
            <p>{user.name.english}</p>
          </div>
        ),
      )}
    </div>
  );
}
