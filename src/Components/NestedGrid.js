import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import { useState, useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3drQ4NWbRJF_wnSHenpDQ1TnsuMag9wAfNcn_LT92FBxF4N_O3fQCGHBrqkt29eoQXHOPvuqCJLB1/pubhtml?gid=851695867&single=true";

  function extractCSVDataFromHTML(Mydocument) {
    const table = Mydocument.querySelector("table.waffle"); // Assuming the table has the "waffle" class
    const data = [];
    if (!table) {
      console.error("CSV table not found.");
      return { data };
    }
    // Extract data rows from the table body
    const dataRows = table.querySelectorAll("tbody tr");
    dataRows.forEach((row) => {
      const rowData = [];
      const tdElements = row.querySelectorAll("td");
      tdElements.forEach((td) => {
        rowData.push(td.textContent.trim());
      });
      data.push(rowData);
    });

    return data;
  }

  useEffect(() => {
    // Fetch the HTML content from the URL
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((htmlString) => {
        // Create a new DOMParser
        const parser = new DOMParser();
        // Use the parseFromString method to convert the HTML string into a document
        const doc = parser.parseFromString(htmlString, "text/html");
        const extractedData = extractCSVDataFromHTML(doc);
        // To not send the car name column
        setColumns(extractedData[0].slice(1));
        // To not send columns
        setData(extractedData.slice(1));
        console.log("col", extractedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {data.map((value) => (
            <Grid key={value} item>
              <Cards dataToSend={{ columns, value }}></Cards>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
