import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { HomeContainer } from "./styles";
import heartImg from '../../assets/images/heart.svg';
import notFoundImg from '../../assets/images/not-found.png';

// import { useCharacters } from "../../hooks/useCharacters";


export function Home(): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function loadCharacters() {
      if (searchText === "") {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        
        if (data.status === "404") {
          setNotFound(true)
        }

        setCharacters(data.results);
        setLoading(false);
      } else {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`);
        const data = await res.json();

        if (data.status === "404") {
          setNotFound(true)
        }

        setCharacters(data.results);
        setLoading(false);
      }
    }

    loadCharacters();
  }, [searchText])

  return (
    <div>
      <Header imgButton={heartImg}>
        FAVORITOS
      </Header>

      <HomeContainer>
        <Search searchText={searchText} setSearchText={setSearchText} />
        {
          loading ? <div>Loading...</div> :
          (notFound ? (
            <div>
              <h3>Procuramos em todas as dimensões e não foi encontrado esse cara</h3>
              <img src={notFoundImg} alt="Rick e Morty procurando o personagem pelas dimensões" />
            </div>
          ) : (
            <Card characters={characters} />
          ))
        }
      </HomeContainer>
      
      <Footer />
    </div>
  )
}