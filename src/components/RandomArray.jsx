import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import ListOfActivities from "./ListOfActivities";

function RandomArray() {
    // Define state variables 
  const [randomArray, setRandomArray] = useState([]); // To store the generated random array
  const [arrayLength, setArrayLength] = useState(""); // To store the desired array length
  const [showActivities, setShowActivities] = useState(false); // To control the visibility of activity list

    // Define an array of data types for generating random elements 
  const dataTypes = [Number, String, Boolean, Object, Array];
    // Function to generate a random element of a specified data type
  const getRandomElement = (dataType) => {
    switch (dataType) {
      case Number:
        return Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
      case String:
        return Math.random().toString(36).substring(7); // Generate a random string
      case Boolean:
        return Math.random() < 0.5; // Generate a random boolean
      case Object:
        return { key: Math.random().toString(36).substring(7) }; // Generate a random object
      case Array:
        return [1, 2, 3]; // Generate a sample array

      default:
        return null;
    }
  };
    // Function to generate a random mixed array based on user input
  const generateRandomMixedArray = () => {
    let newArray = [];
    for (let i = 0; i < arrayLength; i++) {
      const randomDataTypeIndex = Math.floor(Math.random() * dataTypes.length);
      const randomDataType = dataTypes[randomDataTypeIndex];
      const randomElement = getRandomElement(randomDataType);
      newArray.push(randomElement);

    }
    console.log("random Array - ",newArray);
    // Update the state variables to reflect the generated array and show the activity list
    setRandomArray(newArray);
    setShowActivities(true);
  };

  return (
    <>
      <Box sx={{ marginTop: "2rem" }}>
        <Accordion>
          <AccordionSummary>
            {/* Input field for specifying array length */}
            <TextField
              label="Enter Array Length"
              type="text"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              value={arrayLength}
              onChange={(e) => setArrayLength(parseInt(e.target.value))}
              sx={{ m: 2, fontSize: "1rem" }}
            />
            {/* Button to generate a random mixed array */}
            <Button
              variant="contained"
              color="success"
              onClick={generateRandomMixedArray}
              size="small"
              sx={{ m: 2, fontSize: "1rem", fontWeight: "bold" }}
            >
              Generate Random Array?
            </Button>
          </AccordionSummary>
          <AccordionDetails>
            {/* Display the generated array or a message if no array is generated */}
            {randomArray.length > 0 ? (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "0rem",
                  color: "green",
                  fontSize: "1.5rem",
                }}
              >
                {randomArray.map((element, index) => (
                  <span style={{ color: "green" }} key={index}>
                    {JSON.stringify(element)}
                  </span>
                ))}
              </Typography>
            ) : (
              <Typography color={"error"}>No array generated yet.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* Pass randomArray, updatedArray, and showActivities as props to ListOfActivities component */}
      <ListOfActivities
        array={randomArray}
        updatedArray={setRandomArray}
        showActivities={showActivities}
      />
    </>
  );
}
export default RandomArray;
