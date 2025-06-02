import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText,
  LinearProgress,
  Button,
  Avatar,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  // Mock data for dashboard
  const [stats] = useState([
    { title: "Projects", value: 12, color: "primary.main" },
    { title: "Tasks", value: 34, color: "secondary.main" },
    { title: "Team Members", value: 8, color: "success.main" },
    { title: "Clients", value: 5, color: "warning.main" },
  ]);

  const [projects] = useState([
    { name: "Website Redesign", progress: 70, status: "In Progress" },
    { name: "Mobile App Development", progress: 40, status: "In Progress" },
    { name: "E-commerce Platform", progress: 90, status: "Review" },
    { name: "CRM Implementation", progress: 20, status: "Planning" },
  ]);

  const [activities] = useState([
    { action: "Updated project files", user: "You", time: "2 hours ago" },
    { action: "Added new task", user: "Sarah", time: "4 hours ago" },
    { action: "Completed milestone", user: "David", time: "Yesterday" },
    { action: "Started new project", user: "You", time: "2 days ago" },
    { action: "Uploaded documents", user: "Alex", time: "3 days ago" },
  ]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name || "User"}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Here's what's happening with your projects today.
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                  bgcolor: "background.paper",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: stat.color,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography variant="h6" component="div" color="white">
                    {stat.value}
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  {stat.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          {/* Projects */}
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 4 }}>
              <CardHeader title="Projects" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  {projects.map((project, index) => (
                    <Grid item xs={12} key={index}>
                      <Box sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 1,
                          }}
                        >
                          <Typography variant="subtitle1">
                            {project.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: getStatusColor(project.status),
                              bgcolor: getStatusBgColor(project.status),
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            {project.status}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box sx={{ width: "100%", mr: 1 }}>
                            <LinearProgress
                              variant="determinate"
                              value={project.progress}
                              color={getProgressColor(project.progress)}
                              sx={{ height: 8, borderRadius: 1 }}
                            />
                          </Box>
                          <Box sx={{ minWidth: 35 }}>
                            <Typography variant="body2" color="text.secondary">
                              {project.progress}%
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      {index < projects.length - 1 && (
                        <Divider sx={{ my: 2 }} />
                      )}
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mb: 4 }}
            >
              View All Projects
            </Button>
          </Grid>

          {/* Recent Activity */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Recent Activity" />
              <Divider />
              <List>
                {activities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <Avatar
                        sx={{
                          bgcolor:
                            activity.user === "You"
                              ? "primary.main"
                              : "secondary.main",
                          mr: 2,
                        }}
                      >
                        {activity.user[0]}
                      </Avatar>
                      <ListItemText
                        primary={activity.action}
                        secondary={
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            component="span"
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mt: 0.5,
                            }}
                          >
                            <span>
                              {activity.user === "You"
                                ? "You"
                                : `by ${activity.user}`}
                            </span>
                            <span>{activity.time}</span>
                          </Typography>
                        }
                      />
                    </ListItem>
                    {index < activities.length - 1 && (
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

// Helper functions for visual indicators
const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "info.dark";
    case "Review":
      return "warning.dark";
    case "Planning":
      return "secondary.dark";
    case "Completed":
      return "success.dark";
    default:
      return "text.primary";
  }
};

const getStatusBgColor = (status) => {
  switch (status) {
    case "In Progress":
      return "info.light";
    case "Review":
      return "warning.light";
    case "Planning":
      return "secondary.light";
    case "Completed":
      return "success.light";
    default:
      return "background.paper";
  }
};

const getProgressColor = (progress) => {
  if (progress >= 75) return "success";
  if (progress >= 40) return "info";
  return "warning";
};

export default Dashboard;
