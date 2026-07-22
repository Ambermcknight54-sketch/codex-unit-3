import { useState } from "react";

export function useBooksApi() {
  const [data, setData] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const max = form.elements.max.value;
    const dataObj = {
      data: max,
    };
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
  return [data, handleSubmit];
}
