import React, { useMemo, useState } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  Link,
  Switch,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Resume = () => {
  const [mode, setMode] = useState('light');
  const [activeNav, setActiveNav] = useState('Resume');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? { background: { default: '#f5f5f5' }, text: { primary: '#000' } }
            : { background: { default: '#121212' }, text: { primary: '#fff' } })
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
            {['Home', 'Resume', 'Research', 'Outreach', 'Personal'].map((item, index) => (
              <React.Fragment key={item}>
                {index !== 0 && <Typography color="text.secondary">|</Typography>}
                <Link
                  component={RouterLink}
                  to={`/${item.toLowerCase()}`}
                  underline="none"
                  onClick={() => setActiveNav(item)}
                  sx={{
                    color: activeNav === item ? 'primary.main' : 'text.primary',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeNav === item ? '50%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '50%',
                    },
                  }}
                >
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

        {/* Resume Display */}
        <Box mt={4} flexWrap="wrap">
          <Typography variant="h5" gutterBottom>
            My Resume
          </Typography>
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
