import { createContext, ReactNode, useState } from "react";


type FavoritesContextProviderProps = {
  children: ReactNode;
}

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
}

type FavoritesContextType = {
  favorites: Character[];
  updateFavorites: (character: Character) => Promise<void>;
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

  async function updateFavorites(character: Character) {
    try {
      const characterAlreadyInFavorites = favorites.find(characterItem => characterItem.id === character.id);

      if (!characterAlreadyInFavorites) {
        setFavorites([...favorites, { ...character } ])
        localStorage.setItem('@RickAndMorty:favorites', JSON.stringify([...favorites, { ...character }]))
        
        return;
      } else {
        const updatedFavorites = favorites.filter(favoritesItem => favoritesItem.id !== character.id);
        setFavorites(updatedFavorites);
        localStorage.setItem('@RickAndMorty:favorites', JSON.stringify(updatedFavorites))

        return;
      }
    } catch {
      console.log('Erro ao atualizar a lista de favoritos!');
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}