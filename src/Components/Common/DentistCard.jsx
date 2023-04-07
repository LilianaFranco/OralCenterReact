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

export const DentistCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Willy Wonka
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nuestros odontólogos cuentan con estudios certificados en las
            mejores universidades del país. Para que estés seguro de sus
            servicios, puedes consultar su número de matrícula.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small" color="primary" variant="contained">
          Ver más...
        </Button>
      </CardActions>
    </Card>
  );
};
