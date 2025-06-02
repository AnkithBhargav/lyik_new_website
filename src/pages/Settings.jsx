import { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Alert,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
} from '@mui/material';
import {
  NotificationsActive,
  Security,
  Palette,
  Language,
  Devices,
  CloudSync,
} from '@mui/icons-material';
import { useThemeMode } from '../themes/ThemeProvider';

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const SettingsSection = ({ title, description, children }: SettingsSectionProps) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {description && (
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>
    )}
    <Divider sx={{ mb: 3 }} />
    {children}
  </Box>
);

const Settings = () => {
  const { mode, toggleColorMode } = useThemeMode();
  const [activeSection, setActiveSection] = useState('appearance');
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Mock settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    activitySummary: true,
  });
  
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    rememberDevices: true,
    passwordResetPeriod: '90',
  });
  
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: mode,
    fontSize: 'medium',
    compactMode: false,
  });
  
  const [syncSettings, setSyncSettings] = useState({
    autoSync: true,
    syncInterval: '30',
    syncOnWifi: true,
  });
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  
  const handleSaveSettings = () => {
    // In a real app, this would save to backend
    console.log('Saving settings');
    setSaveSuccess(true);
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };
  
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppearanceSettings({
      ...appearanceSettings,
      theme: event.target.value as 'light' | 'dark',
    });
    
    // This actually changes the theme in the ThemeContext
    if (event.target.value !== mode) {
      toggleColorMode();
    }
  };
  
  const handleNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotificationSettings({
      ...notificationSettings,
      [event.target.name]: event.target.checked,
    });
  };
  
  const handleSecurityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecuritySettings({
      ...securitySettings,
      [event.target.name]: event.target.checked,
    });
  };
  
  const handleSyncChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSyncSettings({
      ...syncSettings,
      [event.target.name]: event.target.checked,
    });
  };
  
  const handleTextChange = (
    section: 'security' | 'sync',
    field: string,
    value: string
  ) => {
    if (section === 'security') {
      setSecuritySettings({
        ...securitySettings,
        [field]: value,
      });
    } else if (section === 'sync') {
      setSyncSettings({
        ...syncSettings,
        [field]: value,
      });
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Manage your application preferences and account settings.
        </Typography>

        {saveSuccess && (
          <Alert severity="success" sx={{ mb: 4 }}>
            Settings saved successfully!
          </Alert>
        )}

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Paper sx={{ mb: { xs: 3, md: 0 } }}>
              <List component="nav" aria-label="settings categories">
                <ListItemButton
                  selected={activeSection === 'appearance'}
                  onClick={() => handleSectionChange('appearance')}
                >
                  <ListItemIcon>
                    <Palette />
                  </ListItemIcon>
                  <ListItemText primary="Appearance" />
                </ListItemButton>
                <ListItemButton
                  selected={activeSection === 'notifications'}
                  onClick={() => handleSectionChange('notifications')}
                >
                  <ListItemIcon>
                    <NotificationsActive />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton
                  selected={activeSection === 'security'}
                  onClick={() => handleSectionChange('security')}
                >
                  <ListItemIcon>
                    <Security />
                  </ListItemIcon>
                  <ListItemText primary="Security" />
                </ListItemButton>
                <ListItemButton
                  selected={activeSection === 'language'}
                  onClick={() => handleSectionChange('language')}
                >
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary="Language" />
                </ListItemButton>
                <ListItemButton
                  selected={activeSection === 'devices'}
                  onClick={() => handleSectionChange('devices')}
                >
                  <ListItemIcon>
                    <Devices />
                  </ListItemIcon>
                  <ListItemText primary="Devices" />
                </ListItemButton>
                <ListItemButton
                  selected={activeSection === 'sync'}
                  onClick={() => handleSectionChange('sync')}
                >
                  <ListItemIcon>
                    <CloudSync />
                  </ListItemIcon>
                  <ListItemText primary="Sync & Backup" />
                </ListItemButton>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 3 }}>
              {activeSection === 'appearance' && (
                <SettingsSection
                  title="Appearance"
                  description="Customize how the application looks and feels."
                >
                  <FormControl component="fieldset" sx={{ mb: 3 }}>
                    <FormLabel component="legend">Theme</FormLabel>
                    <RadioGroup
                      row
                      name="theme"
                      value={appearanceSettings.theme}
                      onChange={handleThemeChange}
                    >
                      <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="Light"
                      />
                      <FormControlLabel
                        value="dark"
                        control={<Radio />}
                        label="Dark"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl component="fieldset" sx={{ mb: 3 }}>
                    <FormLabel component="legend">Font Size</FormLabel>
                    <RadioGroup
                      row
                      name="fontSize"
                      value={appearanceSettings.fontSize}
                      onChange={(e) =>
                        setAppearanceSettings({
                          ...appearanceSettings,
                          fontSize: e.target.value,
                        })
                      }
                    >
                      <FormControlLabel
                        value="small"
                        control={<Radio />}
                        label="Small"
                      />
                      <FormControlLabel
                        value="medium"
                        control={<Radio />}
                        label="Medium"
                      />
                      <FormControlLabel
                        value="large"
                        control={<Radio />}
                        label="Large"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControlLabel
                    control={
                      <Switch
                        checked={appearanceSettings.compactMode}
                        onChange={(e) =>
                          setAppearanceSettings({
                            ...appearanceSettings,
                            compactMode: e.target.checked,
                          })
                        }
                        name="compactMode"
                      />
                    }
                    label="Compact Mode"
                  />
                </SettingsSection>
              )}

              {activeSection === 'notifications' && (
                <SettingsSection
                  title="Notifications"
                  description="Manage how and when you receive notifications."
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.emailNotifications}
                        onChange={handleNotificationChange}
                        name="emailNotifications"
                      />
                    }
                    label="Email Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.pushNotifications}
                        onChange={handleNotificationChange}
                        name="pushNotifications"
                      />
                    }
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.marketingEmails}
                        onChange={handleNotificationChange}
                        name="marketingEmails"
                      />
                    }
                    label="Marketing Emails"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notificationSettings.activitySummary}
                        onChange={handleNotificationChange}
                        name="activitySummary"
                      />
                    }
                    label="Weekly Activity Summary"
                  />
                </SettingsSection>
              )}

              {activeSection === 'security' && (
                <SettingsSection
                  title="Security"
                  description="Manage your account security settings."
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={securitySettings.twoFactorAuth}
                        onChange={handleSecurityChange}
                        name="twoFactorAuth"
                      />
                    }
                    label="Two-Factor Authentication"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={securitySettings.rememberDevices}
                        onChange={handleSecurityChange}
                        name="rememberDevices"
                      />
                    }
                    label="Remember Trusted Devices"
                  />
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      label="Password Reset Period (days)"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={securitySettings.passwordResetPeriod}
                      onChange={(e) =>
                        handleTextChange('security', 'passwordResetPeriod', e.target.value)
                      }
                    />
                  </Box>
                </SettingsSection>
              )}

              {activeSection === 'language' && (
                <SettingsSection
                  title="Language"
                  description="Set your preferred language and region settings."
                >
                  <Typography variant="body1">
                    This feature is coming soon.
                  </Typography>
                </SettingsSection>
              )}

              {activeSection === 'devices' && (
                <SettingsSection
                  title="Devices"
                  description="Manage the devices connected to your account."
                >
                  <Typography variant="body1">
                    This feature is coming soon.
                  </Typography>
                </SettingsSection>
              )}

              {activeSection === 'sync' && (
                <SettingsSection
                  title="Sync & Backup"
                  description="Configure how your data is synchronized and backed up."
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={syncSettings.autoSync}
                        onChange={handleSyncChange}
                        name="autoSync"
                      />
                    }
                    label="Auto Sync"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={syncSettings.syncOnWifi}
                        onChange={handleSyncChange}
                        name="syncOnWifi"
                      />
                    }
                    label="Sync Only on Wi-Fi"
                  />
                  <Box sx={{ mt: 3 }}>
                    <TextField
                      label="Sync Interval (minutes)"
                      variant="outlined"
                      fullWidth
                      type="number"
                      value={syncSettings.syncInterval}
                      onChange={(e) =>
                        handleTextChange('sync', 'syncInterval', e.target.value)
                      }
                    />
                  </Box>
                </SettingsSection>
              )}

              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2 }}
                  onClick={() => {
                    // Reset settings logic would go here
                  }}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveSettings}
                >
                  Save Changes
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Settings;