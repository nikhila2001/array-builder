import { styled } from "@mui/material/styles"; // Import styled from MUI for custom styling
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ResultantArray from "./ResultantArray";
import { makeStyles } from "@mui/styles";  // Import makeStyles for custom styles

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const useStyles = makeStyles((theme) => ({
  chip: {
    fontWeight: "bold",
    letterSpacing: "2px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.success.dark,
    },
  },
}));

function ListOfActivities({ array, updateArray, showActivities }) {
    // Define state variables
  const [selectedActivity, setSelectedActivity] = useState(""); // To store the selected activity
  const [showResultantArray, setShowResultantArray] = useState(false); // To control the visibility of the resultant array

  const classes = useStyles(); // Get custom styles from useStyles

  if (!showActivities) {
    // If showActivities is false, return null to hide this component
    return null;
  }
    // Define an array of activities with labels and descriptions
  const activities = [
    {
      key: 0,
      label: "toString()",
      function: "Converts an array to a string, and returns the result",
    },
    {
      key: 1,
      label: "every()",
      function:
        "Checks if every element in an array pass a test e.g- check if every element in array is of number dataType.",
    },
    {
      key: 2,
      label: "filter()",
      function:
        "Creates a new array with every element in an array that pass a test - e.g. checks if item's length is greater than 3",
    },
    {
      key: 3,
      label: "length",
      function:
        "The length property sets or returns the number of elements in an array.",
    },
    {
      key: 4,
      label: "at()",
      function:
        "the at() method returns an indexed element from an array - e.g. get the third element of fruits",
    },
    {
      key: 5,
      label: "unshift()",
      function:
        'Adds new elements to the start of an array eg. adds "1" to the start of the array',
    },
    { key: 6, label: "flat()", function: "Concatenates sub-array elements" },
    {
      key: 7,
      label: "map()",
      function:
        "Creates a new array with the result of calling a function for each array element, eg.- adds the word 'React' to the end of each element in the array. ",
    },
    {
      key: 8,
      label: "includes()",
      function:
        'Check if an array contains the specified element eg.- checks if an array contain "74"',
    },
    {
      key: 9,
      label: "constructor()",
      function:
        "Returns the function that created the Array object's prototype",
    },
    {
      key: 10,
      label: "join()",
      function: "Joins all elements of an array into a string",
    },
    {
      key: 11,
      label: "keys()",
      function:
        "Returns a Array Iteration Object, containing the keys of the original array",
    },
    {
      key: 12,
      label: "pop()",
      function:
        "Removes the last element of an array, and returns that element",
    },
    {
      key: 13,
      label: "push()",
      function:
        'The push() method adds new items to the end of an array. eg. adds "1" to the end of the array',
    },
    {
      key: 14,
      label: "reduce()",
      function:
        "Reduce the values of an array to a single value (going left-to-right) eg.- returns the sum of all elements in the array",
    },
    {
      key: 15,
      label: "reverse()",
      function: "Reverses the order of the elements in an array",
    },
    {
      key: 16,
      label: "shift()",
      function:
        "Removes the first element of an array, and returns that element",
    },
    {
      key: 17,
      label: "splice()",
      function:
        'Adds/Removes elements from an array e.g insert at index 1, deletes 0 items from array,adds "feb" at index 1',
    },
    {
      key: 18,
      label: "values()",
      function:
        "returns a new array iterator object that iterates the value of each item in the array.",
    },
    { key: 19, label: "sort()", function: "Sorts the elements of an array" },
    {
      key: 20,
      label: "slice()",
      function: "Selects a part of an array, and returns the new array",
    },
    {
      key: 21,
      label: "entries()",
      function: "Returns a key/value pair Array Iteration Object",
    },
    {
      key: 22,
      label: "fill()",
      function:
        "Fill the elements in an array with a static value eg- fill all the elements with arr",
    },
  ];
    // Function to handle when an activity chip is clicked
  const handleActivityClick = (activity) => {
    setSelectedActivity(activity); // Set the selected activity in stat
    console.log("Selected Activity:", activity.label);
    
    // Apply the selected activity to the array and update the state
    applyActivity(activity);
    setShowResultantArray(true); // Show the resultant array
  };
  
  // Function to apply the selected activity to the array
  const applyActivity = (activity) => {
    if (!activity) {
      console.error("NO activity selected");
      return;
    }
    //  create a new array instance before modifying it

    let newArray = [...array];
    switch (activity.label) {
      // Handle each activity using a switch statement
      case "sort()":
        newArray.sort();
        console.log(newArray);
        break;
      case "filter()":
        newArray = newArray.filter((item) => item && item.length > 3);
        console.log(newArray);
        break;
      case "at()":
        newArray = newArray.at(2);
        console.log("at index 2 the item is : ", newArray);
        break;

      case "reverse()":
        let reversedArr = newArray.reverse();
        console.log("reverse", reversedArr);
        break;
      case "flat()":
        newArray = newArray.flat();
        console.log(newArray);
        break;
      case "map()":
        newArray = newArray.map((x) => `${x}React`);
        console.log(newArray);
        break;

      case "join()":
        newArray = newArray.join(" ");
        break;
      case "keys()":
        newArray = Array.from(newArray.keys());
        console.log("keys of array", newArray);
        break;

      case "pop()":
        newArray.pop();
        console.log(newArray);
        break;
      case "push()":
        newArray.push("1");
        break;
      case "shift()":
        newArray.shift();
        break;
      case "values()":
        newArray = Array.from(newArray.values());
        console.log(newArray);
        break;

      case "length":
        newArray = newArray.length;
        console.log(newArray);
        break;

      case "slice()":
        newArray = newArray.slice(2);
        console.log(`slicing starts from index 2 ${newArray}`);
        break;
      case "splice()":
        let spliced = newArray.splice(1, 0, "feb");
        console.log(
          `insert at index 1, deletes 0 items from array,adds "feb" at index 1 ${spliced}`
        );
        break;
      case "every()":
        // newArray.every((currentValue) => typeof currentValue === "number");
        newArray = newArray.every(
          (currentValue) => typeof currentValue === "number"
        );
        console.log(newArray);
        break;
      case "unshift()":
        newArray.unshift(1);
        console.log(newArray);
        break;
      case "includes()":
        newArray = newArray.includes(75);
        console.log(newArray);
        break;
      case "constructor()":
        newArray = newArray.constructor;
        console.log(newArray);
        break;
      case "reduce()":
        let initial = 0;
        newArray = newArray.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          initial
        );
        console.log(newArray);
        break;
      case "toString()":
        newArray = newArray.toString();
        console.log(newArray);
        break;
      case "entries()":
        let obj = newArray.entries();
        newArray = [];
        for (const [index, value] of obj) {
          newArray.push(index + ":" + value);
          console.log(index + ": " + value);
        }
        console.log(newArray);
        break;

      case "fill()":
        newArray = newArray.fill("arr");
        console.log(newArray);
        break;
      default:
        break;
    }
    // update the array after the switch statement
    return {
      array: array,
      updatedArray: newArray,
    };
  };
  return (
    <>
      {/* Display a message to select an activity */}
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          margin: "1rem ",
          color: "#1565c0",
          textTransform: "capitalize",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        select an Activity to perform on your Array.
      </Typography>
      {/* Display a list of activities as Chips */}
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: "0.5",
          m: "0",
        }}
      >
        {activities.map((activity) => {
          return (
            <ListItem key={activity.key} sx={{ padding: "0.5rem" }}>
              <Chip
                onClick={() => handleActivityClick(activity)}
                // variant={selectedActivity === activity ? "filled" : "outlined"}
                // color={selectedActivity === activity ? "primary.main" : "default"}
                color="primary"
                variant="outlined"
                label={activity.label}
                className={classes.chip}
              />
            </ListItem>
          );
        })}
      </Paper>
      {/* Pass array and resultant array to updatedArray component */}
      <ResultantArray
        array={array}
        updatedArray={
          selectedActivity
            ? applyActivity(selectedActivity).updatedArray
            : array
        }
        selectedActivity={selectedActivity}
        showResultantArray={showResultantArray}
      />
    </>
  );
}
export default ListOfActivities;
