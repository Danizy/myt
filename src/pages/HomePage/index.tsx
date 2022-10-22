import { Button, Container, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PATHS from 'navigation/paths'
import React from 'react'
import { Link } from 'react-router-dom'
import Appear from '../../components/utils/Appear'

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Appear>
          <Paper elevation={1} sx={{ pb: 3 }}>
            <Typography variant="h1" align="center">
              Ytd
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Button component={Link} to={PATHS.playlist} variant="contained">
                Pick playlist
              </Button>
            </Box>
          </Paper>
        </Appear>
      </Container>
    </Box>
  )
}

export default HomePage
