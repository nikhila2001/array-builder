import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
function ResultantArray({
  // Receiving props from ListOfActivities
  array,
  updatedArray,
  selectedActivity,
  showResultantArray,
}) {
  if (!showResultantArray) {
      // If showResultantArray is false, return null to hide this component
    return null;
  }
  return (
    <>
      {/* Display a Box containing the result */}
      <Box sx={{ margin: "2rem 0" }}>
        <Paper elevation={0} sx={{ padding: "1rem" }}>
          {/* Display the original array */}
          <Typography
            sx={{ color: "#1565c0", letterSpacing: "0px", fontWeight: "bold" }}
          >
            1.Your Array :{" "}
            <span style={{ color: "green", letterSpacing: "3px" }}>
              {JSON.stringify(array)}
            </span>
          </Typography>
          {/* Display the selected activity */}
          <Typography
            sx={{ color: "#1565c0", letterSpacing: "2px", fontWeight: "bold" }}
          >
            2.Selected activity:{" "}
            <span style={{ color: "green", letterSpacing: "3px" }}>{`${
              selectedActivity && selectedActivity.label
            }`}</span>
          </Typography>
          {/* Display the description of the selected activity */}
          <Typography
            sx={{ color: "#1565c0", letterSpacing: "2px", fontWeight: "bold" }}
          >
            3.Method Description:{" "}
            <span style={{ color: "green" }}>{`${
              selectedActivity && selectedActivity.function
            }  
            }}`}</span>
          </Typography>
          {/* Display the resultant array after applying the selected activity */}
          <Typography
            sx={{ color: "#1565c0", letterSpacing: "2px", fontWeight: "bold" }}
          >
            4.Resultant array after applying{" "}
            {selectedActivity && selectedActivity.label} Method: -{" "}
            <span style={{ color: "green", letterSpacing: "3px" }}>
              {JSON.stringify(updatedArray)}
            </span>
          </Typography>
        </Paper>
      </Box>
    </>
  );
}
export default ResultantArray;
