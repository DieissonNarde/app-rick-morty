
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";

import { HomeContainer } from "./styles";
import heartImg from '../../assets/images/heart.svg';

export function Home(): JSX.Element {
  return (
    <div>
      <Header imgButton={heartImg}>
        FAVORITOS
      </Header>

      <HomeContainer>
        <Search />

      </HomeContainer>
      
      <Footer />
    </div>
  )
}