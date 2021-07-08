import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { FavoritesContainer, LoadingDiv, NotFavoritesDiv } from "./styles";
import homeImg from '../../assets/images/home.svg';
import notFavoritesImg from '../../assets/images/not-favorites.ico';

import { useFavorites } from "../../hooks/useFavorites";


export function Favorites(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [notFavorite, setNotFavorite] = useState(false);

  const { favorites } = useFavorites();

  useEffect(() => {
    async function loadFavorites() {
      if (favorites.length >= 1) {
        setLoading(false);
        setNotFavorite(false);
      } else {
        setLoading(false);
        setNotFavorite(true);
      }
    }

    loadFavorites();
  }, [favorites])

  return (
    <div>
      <Header imgButton={homeImg} toLink={"/"}>
        Home
      </Header>

      <FavoritesContainer>
      <h1>SUA LISTA DE FAVORITOS</h1>
      {
        loading ? (
          <LoadingDiv>
            <p>Loading...</p>
          </LoadingDiv>
        ) : (
          notFavorite ? (
            <NotFavoritesDiv>
              <h3>Você não tem personagens favoritos</h3>
              <img src={notFavoritesImg} alt="Rick voando pelo espaço vazio que você deixaste" />
            </NotFavoritesDiv>
          ) : (
            <Card characters={favorites} />
        ))
      }
      </FavoritesContainer>

      <Footer />
    </div>
  )
}