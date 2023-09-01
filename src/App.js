import RandomArray from "./components/RandomArray";
import InputArray from "./components/InputArray";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <CssBaseline /> {/* Apply CSS baseline to normalize styles */}
      <Container fixed maxWidth="md"> {/*  fixed-width container */}
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <Header />
          <RandomArray />
          <Typography
            variant="h3"
            textAlign={"center"}
            margin={2}
            color={"#1565c0"}
            fontWeight={"BOLD"}
            fontFamily={"fontFamily1"}
          >
            OR
          </Typography>
          <InputArray />
        </Box>
      </Container>
    </>
  );
}

export default App;
