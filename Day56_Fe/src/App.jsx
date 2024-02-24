import ListUser from "./pages/ListUser/ListUser";
import UserDtail from "./pages/UserDetail/UserDtail";
import { Route, Routes } from "react-router-dom";
import "./assets/style.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListUser />} />
      <Route path="/user/:id" element={<UserDtail />} />
    </Routes>
  );
}

export default App;
