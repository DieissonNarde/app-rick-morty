import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 300px;
  overflow: hidden;
  border-radius: 8px;
  color: #00abc1;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

export const ImgDiv = styled.div`
  overflow: hidden;
  height: 200px;
`;

export const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.5rem;

  > div h3, div p {
    margin: 0;
    padding: 0;
  }

  > div h3 {
    color: #f2ec25;
    margin-bottom: 0.5rem;
  }
`;