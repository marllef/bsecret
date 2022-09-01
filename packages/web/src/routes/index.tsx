import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "~/pages/login";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
