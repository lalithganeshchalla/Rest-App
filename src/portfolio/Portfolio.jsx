import React, { useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Switch,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import profileImage from '../assets/my.jpg';

const Portfolio = () => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                background: {
                  default: '#f5f5f5'
                }
              }
            : {
                background: {
                  default: '#121212'
                }
              })
        },
        typography: {
          fontFamily: 'Arial, sans-serif'
        }
      }),
    [mode]
  );

  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container  sx={{ mt: 2, mb: 4 }}>
        {/* Header */}
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={4}>
  <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
    <Typography variant="h6">
      Lalith Ganesh Challa
    </Typography>
    <Typography variant="body2" color="text.secondary" mt={0.5}>
      Frontend Developer
    </Typography>
  </Box>
  <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
    <Link href="#resume" underline="hover" color='textPrimary'>Resume</Link>
    <Typography>
        |
    </Typography>
    <Link href="#research" underline="hover" color='textPrimary'>Research</Link>
    <Typography>
        |
    </Typography>
    <Link href="#outreach" underline="hover" color='textPrimary'>Outreach</Link>
    <Typography>
        |
    </Typography>
    <Link href="#personal" underline="hover" color='textPrimary'>Personal</Link>
    <Switch
      checked={mode === 'dark'}
      onChange={handleThemeToggle}
      inputProps={{ 'aria-label': 'theme toggle' }}
    />
  </Box>
</Box>
        <Box display="flex" flexDirection="row" justifyContent="center" textAlign="center" my={10} gap={2}>
          <Box>
            <Avatar
            src={profileImage}
            alt="Dalya Baron"
            sx={{ width: 350, height: 350, mx: 'auto', mb: 2 }}
          />
          </Box>
          <Box display="flex" flexDirection="column" mt={12} textAlign="left">
            <Typography variant="h5" fontWeight="bold">
            Lalith Ganesh Challa
          </Typography>
          <Typography variant="h6" fontWeight="bold" mt={1}>
            A bit about me
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="sm" mx="auto" mt={1}>
            I am a passionate frontend developer with a keen interest in creating intuitive and dynamic user interfaces.
          </Typography>
          </Box>
        </Box>
                 <Grid container justifyContent="center" spacing={2} mt={4}>
            {[
              { label: 'Resume', color: '#b1f740' },
              { label: 'Research', color: '#f2a024' },
              { label: 'Outreach', color: '#24f2c2' },
              { label: 'Personal', color: '#b3bab8' }
            ].map((item, idx) => (
              <Grid item key={idx}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: item.color,
                    color: '#000',
                    borderRadius: '50%',
                    width: 80,
                    height: 80,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { bgcolor: item.color }
                  }}
                >
                  {item.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        {/* Footer */}
        <Divider sx={{ width:'100%', my: 4 }} />
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">Email: {''} 
                <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRfwTwwrHMhvdTFhpsCbnFcfJHbBqkPTqbGPjnXHBZkTbDDQPWVQHGNMxHNwZtmMfwxV" target="_blank" rel="noopener">
                challalalithganesh@gmail.com
                </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              GitHub:{' '}
              <Link href="https://github.com/lalithganeshchalla" target="_blank" rel="noopener">
                github.com/lalithganeshchalla
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              Linkedin:{' '}
              <Link href="www.linkedin.com/in/challa-lalith-ganesh" target="_blank" rel="noopener">
                linkedin.com/challa-lalith-ganesh
              </Link>
            </Typography>
          </Grid>
        </Grid>
       
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;
