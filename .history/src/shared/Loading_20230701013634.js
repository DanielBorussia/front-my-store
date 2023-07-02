import React from "react";

//UI
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ size = 40, color = "primary" }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <CircularProgress color={color} size={size} />
    </Box>
  );
};

export default Loading;
