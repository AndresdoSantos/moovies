import { useContext } from 'react';

import { NavigationContext } from '../contexts/NavigationContext';

import { Home } from '../pages/Home';
import { MovieDetail } from '../pages/MovieDetail';
import { GetStarted } from '../pages/Onboarding/GetStarted';
import { SignIn } from '../pages/SignIn';
import { Ticket } from '../pages/Ticket';

import { GlobalStyle } from '../styles/globals';

export function Routes() {
  const { page } = useContext(NavigationContext);

  return (
    <GlobalStyle>
      {page === 'onboard' && <GetStarted />}
      {page === 'signin' && <SignIn />}
      {page === 'home' && <Home />}
      {page === 'movieDetail' && <MovieDetail />}
      {page === 'ticket' && <Ticket />}
    </GlobalStyle>
  );
}
