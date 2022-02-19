import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PlaylistPage from '../pages/PlaylistPage';
import PATHS from './paths';

const Navigation = () => {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomePage />} />
      <Route path={PATHS.playlist} element={<PlaylistPage />} />
    </Routes>
  );
};

export default Navigation;
