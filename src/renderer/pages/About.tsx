import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TextBar from "../components/TextBar";

const About = () => {
  return (
    <div>
      <TextBar />
      <Button
        variant="contained"
        component={Link}
        to="/"
        startIcon={<HomeIcon />}
      >
        Go to /
      </Button>
    </div>
  );
};

export default About;
