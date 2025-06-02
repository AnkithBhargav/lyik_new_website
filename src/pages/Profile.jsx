import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Avatar,
  Divider,
  Tab,
  Tabs,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
} from '@mui/material';
import { PhotoCamera, Save, Edit } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const { user } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    role: user?.role || 'Administrator',
    location: 'New York, NY',
    bio: 'Senior product designer with over 10 years of experience in creating user-centered digital products.',
  });

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // In a real app, this would save to backend
    console.log('Saving profile data:', formData);
    setIsEditing(false);
  };

  // Sample data for activity tab
  const activities = [
    { action: 'Updated profile information', date: '2 days ago' },
    { action: 'Added a new project', date: '1 week ago' },
    { action: 'Completed a task', date: '2 weeks ago' },
  ];

  // Sample data for projects tab
  const projects = [
    { name: 'Website Redesign', role: 'Project Lead', status: 'In Progress' },
    { name: 'Mobile App Development', role: 'Designer', status: 'Completed' },
    { name: 'Marketing Campaign', role: 'Contributor', status: 'Planning' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Manage your account information and preferences.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '3rem',
                  }}
                >
                  {formData.name.charAt(0)}
                </Avatar>
                <Button
                  component="label"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: -10,
                    minWidth: 'auto',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                  }}
                  variant="contained"
                >
                  <PhotoCamera fontSize="small" />
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
              <Typography variant="h5" gutterBottom>
                {formData.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {formData.email}
              </Typography>
              <Chip
                label={formData.role}
                color="primary"
                variant="outlined"
                sx={{ mt: 1 }}
              />
              <Divider sx={{ my: 3 }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle2" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Email:</strong> {formData.email}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Phone:</strong> {formData.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  <strong>Location:</strong> {formData.location}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ mb: 4 }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  aria-label="profile tabs"
                  sx={{ px: 2 }}
                >
                  <Tab label="Personal Information" id="profile-tab-0" />
                  <Tab label="Activity" id="profile-tab-1" />
                  <Tab label="Projects" id="profile-tab-2" />
                </Tabs>
              </Box>

              <TabPanel value={tabValue} index={0}>
                <Box sx={{ px: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                    <Typography variant="h6">Personal Information</Typography>
                    <Button
                      variant="outlined"
                      startIcon={isEditing ? <Save /> : <Edit />}
                      onClick={isEditing ? handleSave : toggleEditing}
                    >
                      {isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </Box>
                  <Divider sx={{ mb: 3 }} />
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        margin="normal"
                        multiline
                        rows={4}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={1}>
                <Box sx={{ px: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Activity
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <List>
                    {activities.map((activity, index) => (
                      <React.Fragment key={index}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                              {index + 1}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={activity.action}
                            secondary={activity.date}
                          />
                        </ListItem>
                        {index < activities.length - 1 && (
                          <Divider variant="inset" component="li" />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </Box>
              </TabPanel>

              <TabPanel value={tabValue} index={2}>
                <Box sx={{ px: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    My Projects
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Grid container spacing={3}>
                    {projects.map((project, index) => (
                      <Grid item xs={12} sm={6} key={index}>
                        <Card>
                          <CardContent>
                            <Typography variant="h6" gutterBottom>
                              {project.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Role: {project.role}
                            </Typography>
                            <Chip
                              label={project.status}
                              color={
                                project.status === 'Completed'
                                  ? 'success'
                                  : project.status === 'In Progress'
                                  ? 'info'
                                  : 'warning'
                              }
                              size="small"
                              sx={{ mt: 1 }}
                            />
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;