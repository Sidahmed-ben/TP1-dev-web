import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MyTable from "./Table";
import { useState, useEffect } from "react";

function Cards(props) {
  const { dataToSend } = props;
  const [title, setTitle] = useState(dataToSend.value[0]);
  const [imageUrl, setImageUrl] = useState(dataToSend.value[6]);

  console.log(dataToSend);
  return (
    <div>
      <Card sx={{ minWidth: 400, margin: 10 }}>
        <CardMedia component="img" alt={title} height="250" image={imageUrl} />
        <CardContent sx={{ p: 0, m: 0, "&:last-child": { paddingBottom: 0 } }}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: 35, p: 2.5 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <MyTable dataToSend={dataToSend}></MyTable>
        </CardContent>
      </Card>
    </div>
  );
}

export default Cards;
