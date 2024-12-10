import React, { useEffect, useState } from "react";
import API from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/test").then((response) => setMessage(response.data.message));
  }, []);

  return <div>{message}</div>;
}

export default App;
