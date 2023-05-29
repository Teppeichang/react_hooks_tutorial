import { useContext } from "react";
import { AuthorContext } from "../../pages/hooks/UseContextPage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ThirdChild = () => {
  const author = useContext(AuthorContext);
  return (
    <div className="bg-slate-400 p-5">
      <p className="pb-2">この領域はContextコンポーネント3です</p>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 400,
          p: 4,
          mb: 5,
          borderRadius: 0
        }}
      >
        <div>
          <CardMedia component="img" image={author.icon} alt="中の人" />
        </div>
        <div>
          <Typography variant="h5">中の人</Typography>
          <Typography variant="body2" color="text.secondary">
            名前: {author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            生年月日: {author.birthDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            職業: {author.job}
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default ThirdChild;
