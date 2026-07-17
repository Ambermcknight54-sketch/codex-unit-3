import { useState } from "react";

export function useBooksApi() {
  // Store the data from the REST API, starting as an empty array
  const [data, setData] = useState([]);
  // Handles form submission and fetches the API data
  async function handleSubmit(event) {
    event.preventDefault();
    // Grab the form element
    const form = event.target;
    // Retrieve the value of the number input with name="max"
    const maxVal = form.elements.max.value;
    // Create the data object containing the max parameter
    const dataObj = {
      limit: maxVal,
    };
    // Convert data to a query string
    const dataString = new URLSearchParams(dataObj).toString();

    try {
      // Fetch from the API, using ? to separate the url from the dataString
      const response = await fetch(
        `https://potterapi-fedeperin.vercel.app/en/books?${dataString}`,
      );
      // Parse the response and save the results with setData
      const results = await response.json();
      setData(results);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  }

  // Return data and handleSubmit
  return [data, handleSubmit];
}
