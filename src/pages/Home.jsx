import { Container, Typography, Box, Grid, Paper, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Modern UI Design
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Beautiful, responsive, and accessible React components
              </Typography>
              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mr: 2 }}
              >
                Learn More
              </Button>
              <Button
                component={RouterLink}
                to="/resources"
                variant="outlined"
                color="inherit"
                size="large"
                sx={{ 
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: theme.palette.secondary.main,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                Resources
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 300,
                  borderRadius: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Typography variant="h4">Modern UI Showcase</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Material Design',
              description: 'Built on top of Material-UI with custom theming and components',
            },
            {
              title: 'Responsive Layout',
              description: 'Fully responsive design that works on all devices and screen sizes',
            },
            {
              title: 'Dark Mode',
              description: 'Toggle between light and dark themes with a single click',
            },
            {
              title: 'Protected Routes',
              description: 'Secure your app with authentication and protected routes',
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to get started?
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Explore our resources or login to access the dashboard
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mx: 1, mb: 2 }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/resources"
              variant="outlined"
              color="primary"
              size="large"
              sx={{ mx: 1, mb: 2 }}
            >
              Explore Resources
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;