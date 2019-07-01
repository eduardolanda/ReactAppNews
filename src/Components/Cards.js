import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

const Cards = props => {
  return (
    <Card style={{ maxWidth: "500px", margin: "20px auto 0 auto " }}>
      <CardContent>
        <Typography variant="h3" color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={props.imageUrl}
          title="Photo"
        />
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
