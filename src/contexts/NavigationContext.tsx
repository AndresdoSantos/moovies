import { createContext, ReactNode, useCallback, useState } from 'react';

type TPath = 'onboard' | 'signin' | 'home' | 'movieDetail' | 'ticket';

export type TMovie<S = string> = {
  imageURL: any;
  stars: Array<S | undefined>;
  name: S;
  date: S;
  duration: S;
  gender: S;
  starsConfirmed: number;
  synopsis: string;
};

type TNavigationContextData = {
  page: TPath;
  getPage: (value: TPath) => void;

  movie?: TMovie;
  getMovie: (value?: TMovie) => void;
};

export const NavigationContext = createContext({} as TNavigationContextData);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<TPath>('onboard');

  const getPage = useCallback((value: TPath) => setPage(value), []);

  const [movie, setMovie] = useState<TMovie | undefined>(undefined);

  const getMovie = useCallback((value: TMovie | undefined) => {
    if (typeof value !== 'undefined') {
      setMovie(value);

      setPage('movieDetail');
    } else {
      setPage('home');
    }
  }, []);

  return (
    <NavigationContext.Provider value={{ getPage, page, getMovie, movie }}>
      {children}
    </NavigationContext.Provider>
  );
}
