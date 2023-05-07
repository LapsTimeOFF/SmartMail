import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import TextBar from "../components/TextBar";

const Home = () => {
  return (
    <div>
      <>
        <TextBar />
        <Button
          variant="contained"
          component={Link}
          to="/about"
          startIcon={<InfoIcon />}
        >
          Go to /about
        </Button>
      </>
    </div>
  );
};

export default Home;
