import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PATHS from '../../navigation/paths';

const PlaylistPage = () => {
  return (
    <div>
      <Button component={Link} to={PATHS.home} variant="contained">
        Go back
      </Button>
      Page2
    </div>
  );
};

export default PlaylistPage;
