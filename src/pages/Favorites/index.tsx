
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { FavoritesContainer } from "./styles";
import homeImg from '../../assets/images/home.svg';

export function Favorites(): JSX.Element {
  return (
    <div>
      <Header imgButton={homeImg} toLink={"/"}>
        Home
      </Header>

      <FavoritesContainer>
        <h1>Sua lista de Favoritos</h1>
      </FavoritesContainer>
      
      <Footer />
    </div>
  )
}