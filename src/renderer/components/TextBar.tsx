import { Typography } from "@mui/material";
import React from "react";

const TextBar = () => {
  return (
    <Typography variant="h2">Hello from {location.hash.slice(1)}</Typography>
  );
};

export default TextBar;
