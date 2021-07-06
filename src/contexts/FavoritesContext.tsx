import { createContext, ReactNode, useState } from "react";


type FavoritesContextProviderProps = {
  children: ReactNode;
}

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type: string;
}

type FavoritesContextType = {
  favorites: Character[];
  addCharacter: (character: Character) => Promise<void>;
  removeCharacter: (character: Character) => void;
}


export const FavoritesContext = createContext({} as FavoritesContextType);

export function FavoritesContextProvider({ children }: FavoritesContextProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const storagedFavorites = localStorage.getItem('@RickAndMorty:favorites');

    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }

    return [];
  });

  async function addCharacter(character: Character) {
    try {
      const characterAlreadyInFavorites = favorites.find(characterItem => characterItem.id === character.id);

      if (!characterAlreadyInFavorites) {
        setFavorites([...favorites, { ...character } ])
        localStorage.setItem('@RickAndMorty:favorites', JSON.stringify([...favorites, { ...character }]))
        
        return;
      }
    } catch {
      console.log('Erro ao adicionar o personagem como favorito!');
    }
  }

  async function removeCharacter(character: Character) {
    try {
      const characterExists = favorites.some(characterItem => characterItem.id === character.id);
      if (!characterExists) {
        console.log('Erro ao remover o character!');
        return;
      }

      const updatedFavorites = favorites.filter(favoritesItem => favoritesItem.id !== character.id);
      setFavorites(updatedFavorites);
      localStorage.setItem('@RickAndMorty:favorites', JSON.stringify(updatedFavorites))
    } catch {
      console.log('Erro ao remover o character!');
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addCharacter, removeCharacter }}>
      {children}
    </FavoritesContext.Provider>
  );
}