import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import {
  WinnerOuterContainer, WinnerTitle, WinnerAvatar, WinnerName, WinnerRechoose,
} from './Winner.style';

export default function Winner() {
  const navigate = useNavigate();
  const userDatas = useSelector((state) => state.lottery.data);
  const lottery = useSelector((state) => state.lottery.lottery);

  return (
    <WinnerOuterContainer>
      {(userDatas && lottery) ? (
        <>
          <WinnerTitle>抽獎結果</WinnerTitle>
          <div key={userDatas[lottery].id}>
            <WinnerAvatar src={`${userDatas[lottery].image.thumbnail}`} alt="pokemon" />
            <WinnerName>{userDatas[lottery].name.english}</WinnerName>
          </div>
        </>
      ) : (<Navigate to="/" replace />)}
      <WinnerRechoose type="button" onClick={() => navigate('/')}>重新抽選</WinnerRechoose>
    </WinnerOuterContainer>
  );
}
