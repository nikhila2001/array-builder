import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import ListOfActivities from "./ListOfActivities";

function InputArray() {
  // Define state variables using useState hook
  const [array, setArray] = useState(); // To store the user-input array as an array of items
  const [arrayAsString, setArrayAsString] = useState(); // To store the user-input array as a string
  const [showActivities, setShowActivities] = useState(false); // To control the visibility of activity list

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setArrayAsString(e.target.value);
  };
  
   // Function to handle adding the user-input array
  const handleAdd = () => {
    // Split the user-input string by commas and trim each item
    const newArray = arrayAsString.split(",").map((item) => item.trim());
    console.log(`input array = ${newArray}`);
    setArray(newArray);
    
    // Update the state variables to reflect the user-input array
    setArrayAsString("");
    setShowActivities(true);
  };

  return (
    <>
      <Box sx={{ bgcolor: "white" }}>
        <Accordion>
          <AccordionSummary>
            {/* Button to indicate taking a custom input array */}
            <Button
              variant="contained"
              size="large"
              sx={{ fontWeight: "bold" }}
            >
              Take My Own Array
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            {/* Text field for entering a custom array with an "Add" button */}
            <TextField
              fullWidth
              id="fullWidth"
              label="Text field with button"
              placeholder="Enter Comma Seperated Array Items"
              multiline
              variant="outlined"
              value={arrayAsString}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {/* Button to add the custom array */}
                    <Button
                      variant="contained"
                      onClick={handleAdd}
                      color="success"
                      sx={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      Add
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Pass user-input array, setArray function, and showActivities as props to ListOfActivities component */}
      <ListOfActivities
        array={array}
        updatedArray={setArray}
        showActivities={showActivities}
      />
    </>
  );
}
export default InputArray;
