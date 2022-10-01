import * as React from "react";
import Box from "@mui/system/Box";

export const Button = () => {
  return (
    <Box
      component="button"
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        borderRadius: 4,
        border: 1,
        padding: "0 30px",
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          opacity: 0.7,
        },
      }}
    >
      Button
    </Box>
  );
};

