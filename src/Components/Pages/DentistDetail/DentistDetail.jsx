import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
import React from "react";

export const DentistDetail = ({ user }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://burst.shopifycdn.com/photos/male-dentist.jpg?width=1200&format=pjpg&exif=1&iptc=1"
              alt="green iguana"
            />
            <CardContent>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  {user.name}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.email} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.phone} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.website} />
                  </ListItem>
                </List>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
