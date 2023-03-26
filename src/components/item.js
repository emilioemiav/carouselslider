import { Button, Paper } from "@mui/material";
import "./carousel.css";

function Item(props) {
  return (
    <div className="container">
      <Paper
        sx={{
          padding: 2,
          width: "460px",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          background: "#080808",
          color: "#FCFCFC",
        }}
      >
        <img
          src={props.item.image}
          alt={props.item.title}
          style={{
            width: "460px",
            height: "400px",
          }}
        />
        <h2>{props.item.title}</h2>
        <h3>{props.item.description}</h3>

        <Button
          sx={{
            color: "whitesmoke",
            backgroundColor: "#009CFF",
            borderRadius: 4,
            ":hover": {
              boxShadow: 6,
              background: "#30ACFB",
            },
          }}
        >
          Pedir Ahora
        </Button>
      </Paper>
    </div>
  );
}
export default Item;
