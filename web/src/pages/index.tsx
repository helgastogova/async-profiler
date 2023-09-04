import React, { useState, useEffect } from "react";
import FrameGraph from "@client/graph";
import { Layout } from "@ui";

const IndexPage = () => {
  const [data, setData] = useState(null); // State to hold the fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Adjust this URL
        console.log("Response Status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("There was a problem with the fetch:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator if data is not yet available
  }

  return (
    <main>
      <Layout>
        <FrameGraph data={data} />
      </Layout>
    </main>
  );
};

export default IndexPage;
