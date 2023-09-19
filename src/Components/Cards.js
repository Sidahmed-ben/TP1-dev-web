import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyTable from "./Table";

function Cards() {
  return (
    <div>
      <Card sx={{ minWidth: 400, margin: 10 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image="https://c4.wallpaperflare.com/wallpaper/902/29/190/1953-buick-skylark-wallpaper-preview.jpg
          "
        />
        <CardContent sx={{ p: 0, m: 0, "&:last-child": { paddingBottom: 0 } }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 35, p: 2.5 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            Lizard
          </Typography>
          <MyTable></MyTable>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
