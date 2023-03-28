import { Box } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "success.light",
        color: "white",
        padding: "24px",
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "16px",
      }}
    >
      Bikable Cities
    </Box>
  );
};

export default Banner;
