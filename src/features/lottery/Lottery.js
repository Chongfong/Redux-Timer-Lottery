import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './lotterySlice';
import {
  LotteryOuterContainer, LotteryListContainer, LotteryCandidateContainer,
  LotteryTitle, LotteryAvatar, LotteryName,
} from './Lottery.style';

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
    <LotteryOuterContainer>
      <LotteryTitle>參與抽獎名單</LotteryTitle>
      <LotteryListContainer>
        {userDatas
      && userDatas.map(
        (user) => (
          <LotteryCandidateContainer key={user.id}>
            <LotteryAvatar src={`${user.image.thumbnail}`} alt={`pokemon-${user.id}`} />
            <LotteryName>{user.name.english}</LotteryName>
          </LotteryCandidateContainer>
        ),
      )}
      </LotteryListContainer>
    </LotteryOuterContainer>
  );
}
