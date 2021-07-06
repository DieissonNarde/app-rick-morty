import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 82px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
`;

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    font-size: 2.2rem;
    color: #f2ec25;
    margin: 0;
  }

  > img {
    margin-top: 40px;
    width: 400px;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > p {
    font-size: 2.4rem;
    color: #f2ec25;
    margin: 0;
  }
`;