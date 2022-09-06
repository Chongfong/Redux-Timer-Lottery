import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Winner() {
  const navigate = useNavigate();
  const userDatas = useSelector((state) => state.lottery.data);
  const lottery = useSelector((state) => state.lottery.lottery);

  return (
    <div>
      {(userDatas && lottery) ? (
        <div key={userDatas[lottery].id}>
          <img src={`${userDatas[lottery].image.thumbnail}`} alt="pokemon" />
          <p>{userDatas[lottery].name.english}</p>
          <p>{userDatas[lottery].id}</p>
        </div>
      ) : (<Navigate to="/" replace />)}
      <button type="button" onClick={() => navigate('/')}>重新抽選</button>
    </div>
  );
}
