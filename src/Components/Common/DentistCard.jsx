import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { Link } from "react-router-dom";

export const DentistCard = ({ user, favsDispatch, favs }) => {
  console.log(favs);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} key={user.id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://burst.shopifycdn.com/photos/male-dentist.jpg?width=1200&format=pjpg&exif=1&iptc=1"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nuestros odontólogos cuentan con estudios certificados en las
              mejores universidades del país. Para que estés seguro de sus
              servicios, puedes consultar su número de matrícula.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() =>
              favsDispatch({ type: "HANDLE_FAVORITE", payload: user })
            }
          >
            <FavoriteIcon
              color={
                favs.some((fav) => fav.id === user.id) ? "error" : "disabled"
              }
            />
          </IconButton>
          <Link style={{ textDecoration: "none" }} to={`/dentist/${user.id}`}>
            <Button size="small" color="primary" variant="contained">
              Ver más...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
