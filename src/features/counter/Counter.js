import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  update, countDown,
} from './counterSlice';

export default function Counter() {
  const totalSeconds = useSelector((state) => state.counter.totalSeconds);
  const [mins, setMins] = useState(0);
  const [start, setStart] = useState(false);
  const timer = useRef();
  const dispatch = useDispatch();
  const handleChangeTimer = (e) => {
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
    }
    return (() => { clearTimeout(timer.current); });
  }, [totalSeconds, start, dispatch]);

  return (
    <div>
      <p>抽獎時間</p>
      <input
        type="number"
        value={mins}
        max="99"
        onChange={handleChangeTimer}
      />
      分鐘
      <button type="button" onClick={() => { setStart(true); }}>設定</button>
      <p>
        {timeFormat(Math.floor(totalSeconds / 60))}
        :
        {timeFormat(totalSeconds % 60)}
      </p>
    </div>
  );
}
