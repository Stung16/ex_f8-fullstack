import { useState } from "react";
import Home from "./page/Home/Home";
import Container from "@mui/material/Container";
import Login from "./page/Login/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem("apiKey"));
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      {!apiKey ? <Login setApiKey={setApiKey} /> : <Home />}
      <ToastContainer autoClose={1500} />
    </Container>
  );
}
