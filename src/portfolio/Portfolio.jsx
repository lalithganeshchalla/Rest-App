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
                background: { default: '#f5f5f5' },
                text: { primary: '#000' }
              }
            : {
                background: { default: '#121212' },
                text: { primary: '#fff' }
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
      <Container sx={{ mt: 2, mb: 4 }}>
        {/* Header */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          mb={4}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Typography variant="h6">Lalith Ganesh Challa</Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            {['Resume', 'Research', 'Outreach', 'Personal'].map((item, index) => (
              <React.Fragment key={item}>
                {index !== 0 && <Typography>|</Typography>}
                <Link href={`#${item.toLowerCase()}`} underline="hover" sx={{ color: 'text.primary' }}>
                  {item}
                </Link>
              </React.Fragment>
            ))}
            <Switch
              checked={mode === 'dark'}
              onChange={handleThemeToggle}
              inputProps={{ 'aria-label': 'theme toggle' }}
            />
          </Box>
        </Box>

        {/* Main Section */}
        <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center" my={5}>
          <Grid item xs={12} md={4}>
            <Avatar
              src={profileImage}
              alt="Lalith Ganesh"
              sx={{ width: 250, height: 250, mx: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold">
              Lalith Ganesh Challa
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              A bit about me
            </Typography>
            <Box maxWidth="sm" mx="auto" mt={2}>
              <Typography variant="body1" color="text.secondary">
                I am a passionate frontend developer with a keen interest in creating intuitive and dynamic user interfaces.
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={2}>
                I love exploring new technologies and continuously improving my skills to deliver the best user experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box mt={4}>
          <Grid container justifyContent="center" spacing={3}>
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
        </Box>

        {/* Footer */}
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="body2" textAlign="center">
              Email:{' '}
              <Link
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                target="_blank"
                rel="noopener noreferrer"
              >
                challalalithganesh@gmail.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" textAlign="center">
              GitHub:{' '}
              <Link
                href="https://github.com/lalithganeshchalla"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/lalithganeshchalla
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" textAlign="center">
              LinkedIn:{' '}
              <Link
                href="https://www.linkedin.com/in/challa-lalith-ganesh"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/challa-lalith-ganesh
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Portfolio;
