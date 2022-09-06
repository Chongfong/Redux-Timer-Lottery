import styled from 'styled-components';

export const WinnerOuterContainer = styled.div`
  align-self: center;
`;

export const WinnerTitle = styled.p`
  font-size: 2.5rem;
  font-weight: bold; 
  width: 100%;
  text-align: center;
  margin:10px 0px;
`;

export const WinnerAvatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const WinnerName = styled.p`
  font-size: 2rem;
  margin: 0px 1rem;
`;

export const WinnerRechoose = styled.button`
  margin: 10px;
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
`;
