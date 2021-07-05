import { createContext, ReactNode, useState } from "react";


type CharactersContextProviderProps = {
  children: ReactNode;
}

type CharactersFilter = {
  characters: Array<Character>;
}

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
}

type CharactersContextType = {
  charactersFilter: CharactersFilter | undefined;
  filterCharacters: (searchText: string) => void;
}


export const CharactersContext = createContext({} as CharactersContextType);

export function CharactersContextProvider({ children }: CharactersContextProviderProps) {
  const [charactersFilter, setCharactersFilter] = useState<CharactersFilter>();

  async function filterCharacters(searchText: string) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`);
    const data = await res.json();
    setCharactersFilter(data.results);
  }


  return (
    <CharactersContext.Provider value={{ charactersFilter, filterCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
}