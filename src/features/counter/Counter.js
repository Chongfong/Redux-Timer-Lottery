import React, {
  useState, useEffect, useCallback, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { update, countDown } from './counterSlice';
import { winLottery } from '../lottery/lotterySlice';
import {
  CounterOuterContainer, CounterTiTle, CounterInputMins,
  CounterMinuteContainer, CounterStartContainer,
  CounterMins, CounterStart, CounterTimer,
} from './Counter.style';

const CounterDisplay = memo(({
  start, setStart,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalSeconds = useSelector((state) => state.counter.totalSeconds);

  const timeFormat = (num) => (num > 9 ? num : `0${num}`);
  const minutes = timeFormat(Math.floor(totalSeconds / 60));
  const seconds = timeFormat(totalSeconds % 60);

  useEffect(() => {
    let interval = null;
    if (start && totalSeconds > 0) {
      interval = setInterval(() => {
        dispatch(countDown());
      }, 1000);
    } else if (totalSeconds === 0 && start) {
      clearInterval(interval);
      dispatch(winLottery(Math.floor(Math.random() * 100)));
      navigate('/result');
      setStart(false);
    }
    return () => clearInterval(interval);
  }, [start, totalSeconds, dispatch, navigate, setStart]);

  return (
    <CounterTimer>
      {minutes}
      :
      {seconds}
    </CounterTimer>
  );
});

CounterDisplay.propTypes = {
  start: PropTypes.bool.isRequired,
  setStart: PropTypes.func.isRequired,
};

const MemoizedCounterDisplay = memo(CounterDisplay);

const StartButton = memo(({ mins, setStart }) => {
  const handleStart = useCallback(() => {
    if (mins > 0) {
      setStart(true);
    }
  }, [mins, setStart]);

  return (
    <CounterStartContainer>
      <CounterStart type="button" onClick={handleStart}>設定</CounterStart>
    </CounterStartContainer>
  );
});

StartButton.propTypes = {
  mins: PropTypes.number.isRequired,
  setStart: PropTypes.func.isRequired,
};

function Counter() {
  const [mins, setMins] = useState(0);
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const handleChangeTimer = useCallback((e) => {
    const newMins = parseInt(e.target.value, 10);
    if (Number.isNaN(newMins) || newMins <= 0) {
      setMins(0);
      dispatch(update(0));
    } else {
      const minutes = Math.min(newMins, 99);
      setMins(minutes);
      dispatch(update(minutes * 60));
    }
  }, [dispatch]);

  return (
    <CounterOuterContainer>
      <CounterTiTle>抽獎時間</CounterTiTle>
      <CounterInputMins
        type="number"
        value={mins}
        max="99"
        onChange={handleChangeTimer}
      />
      <CounterMinuteContainer>
        <CounterMins>分鐘</CounterMins>
      </CounterMinuteContainer>
      <StartButton mins={mins} setStart={setStart} />
      <MemoizedCounterDisplay start={start} setStart={setStart} />
    </CounterOuterContainer>
  );
}

export default Counter;
