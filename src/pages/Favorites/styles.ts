import styled from 'styled-components';

export const FavoritesContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 82px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;

  > h1 {
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
    color: #3cb54a;
    text-align: center;
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 60px;

  > p {
    font-size: 2.4rem;
    color: #f2ec25;
    margin: 0;
  }
`;

export const NotFavoritesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h3 {
    margin-top: 45px;
    font-size: 2.2rem;
    color: #f2ec25;
    margin: 0;
  }

  > img {
    margin-top: -45px;
    
  }
`;