import styled from 'styled-components';

export const LotteryOuterContainer = styled.div`
  margin: 20px 20px 40px 20px;
`;

export const LotteryListContainer = styled.div`
  height: 80vh;
  overflow: auto;
`;

export const LotteryCandidateContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border: 2px solid #bbb;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
`;

export const LotteryTitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold; 
  width: 100%;
  text-align: center;
  padding: 10px;
`;

export const LotteryAvatar = styled.img`
  width: 80px;
  height: 80px;
`;

export const LotteryName = styled.p`
  font-size: 2rem;
  margin: 0px 1rem;
`;
