import './App.css';

import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './app/routing/Routes';

/**
 * Routes
 * @returns 
 */
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
export { App };
