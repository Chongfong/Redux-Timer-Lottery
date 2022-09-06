import styled from 'styled-components';

export const CounterOuterContainer = styled.div`
  display: flex;
  width: 35%;
  flex-wrap: wrap;
  align-self: flex-start;
  margin: 20px 20px 0px 0px;
  @media (max-width: 760px) {
    width: 60%;
}
`;

export const CounterTiTle = styled.p`
  font-size: 2.5rem;
  font-weight: bold; 
  width: 100%;
  text-align: left;
  margin: 10px 0px;
`;

export const CounterInputMins = styled.input`
  border: 2px solid #ddd;
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 1.5rem;
  width: 50%;
  text-align: end;
  height: 3rem;
  @media (max-width: 1000px) {
    width: 60%;
}
`;

export const CounterMinuteContainer = styled.div`
  flex: 0 1 20%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 760px) {
    flex: 0 1 25%;
}
`;

export const CounterStartContainer = styled(CounterMinuteContainer)`
  flex: 0 1 20%;
  @media (max-width: 1000px) {
    flex: 0 1 90%;
}
`;

export const CounterMins = styled.p`
  font-size: 1.5rem;
  width: auto;
`;

export const CounterStart = styled.button`
  padding: 3px 8px;
  border: 2px solid #bbb;
  border-radius: 10px;
  width:auto;
  background-color: darkslategrey;
  color: white;
  font-size: 1.5rem;
  :hover{
    cursor: pointer;
    background-color: #7eaeae;
  }
  @media (max-width: 1000px) {
    width:100%;
}
`;

export const CounterTimer = styled.p`
  font-size: 7rem;
  color: darkblue;
  width: 100%;
  text-align: left;
`;
