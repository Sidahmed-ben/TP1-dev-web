import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function CSVFileReader() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3drQ4NWbRJF_wnSHenpDQ1TnsuMag9wAfNcn_LT92FBxF4N_O3fQCGHBrqkt29eoQXHOPvuqCJLB1/pubhtml?gid=851695867&single=true";

  function extractCSVDataFromHTML(Mydocument) {
    const table = Mydocument.querySelector("table.waffle"); // Assuming the table has the "waffle" class
    const data = [];

    if (!table) {
      console.error("CSV table not found.");
      return { columns, data };
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

        const data = extractCSVDataFromHTML(doc);
        console.log("Data:", data);

        // You can access and manipulate the document as needed
        const title = doc.querySelector("title");
        console.log(title.textContent);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>CSV File Reader</h1>

      <div>
        <strong>Columns:</strong>
        <ul>
          {columns.map((column, index) => (
            <li key={index}>{column}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Values:</strong>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CSVFileReader;
