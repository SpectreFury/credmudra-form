import React, { useState } from "react";
import Form from "./components/Form/Form";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#202020",
      }}
    >
      <Form />
    </main>
  );
}

export default App;
