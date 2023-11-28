import React from "react";
import Container from "@mui/material/Container";
import { mockData } from "../../Api/mock_data";
import BoardContent from "./BoardContent/BoardContent";

export default function Home() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <BoardContent  board = {mockData.board} />
    </Container>
  );
}
