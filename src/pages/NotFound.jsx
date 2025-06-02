import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '10rem', fontWeight: 700, color: 'primary.main', lineHeight: 1 }}>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '600px', mb: 4 }}>
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
          >
            Go to Home
          </Button>
          <Button
            component={RouterLink}
            to="/resources"
            variant="outlined"
            color="primary"
            size="large"
          >
            View Resources
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;