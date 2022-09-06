import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  update, countDown,
} from './counterSlice';
import { winLottery } from '../lottery/lotterySlice';
import {
  CounterOuterContainer, CounterTiTle, CounterInputMins,
  CounterMinuteContainer, CounterStartContainer,
  CounterMins, CounterStart, CounterTimer,
} from './Counter.style';

export default function Counter() {
  const navigate = useNavigate();
  const totalSeconds = useSelector((state) => state.counter.totalSeconds);
  const [mins, setMins] = useState(0);
  const [start, setStart] = useState(false);
  const timer = useRef();
  const dispatch = useDispatch();
  const handleChangeTimer = (e) => {
    setStart(false);
    if (e.target.value > 99) {
      alert('最大數字為99');
      setMins(99);
      dispatch(update(99 * 60));
    } else if (e.target.value > 0) {
      setMins(parseInt(e.target.value, 10));
      dispatch(update(parseInt(e.target.value, 10) * 60));
    }
  };
  const timeFormat = (num) => (num > 9 ? num : `0${num}`);
  useEffect(() => {
    if (start && totalSeconds > 0) {
      timer.current = setTimeout(() => {
        dispatch(countDown());
      }, 1000);
    } else if (start) {
      setMins(0);
      setStart(false);
      dispatch(winLottery(Math.floor(Math.random() * 100)));
      navigate('/result');
    }
    return (() => { clearTimeout(timer.current); });
  }, [totalSeconds, start, dispatch, navigate]);

  return (
    <CounterOuterContainer>
      <CounterTiTle>抽獎時間</CounterTiTle>
      <CounterInputMins
        type="number"
        value={mins}
        max="99"
        onChange={handleChangeTimer}
      />
      <CounterMinuteContainer><CounterMins>分鐘</CounterMins></CounterMinuteContainer>
      <CounterStartContainer><CounterStart type="button" onClick={() => { setStart(true); }}>設定</CounterStart></CounterStartContainer>
      <CounterTimer>
        {timeFormat(Math.floor(totalSeconds / 60))}
        :
        {timeFormat(totalSeconds % 60)}
      </CounterTimer>
    </CounterOuterContainer>
  );
}
