import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Header() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "fontFamily1",
            color: "green",
            textAlign: "center",
          }}
        >
          ArrayBuilder
        </Typography>
      </Box>
    </>
  );
}
export default Header;
