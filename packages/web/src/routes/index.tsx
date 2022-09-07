import { Route, Routes } from "react-router-dom";
import { AskPage } from "~/pages/ask";
import { HomePage } from "~/pages/home";
import { LoginPage } from "~/pages/login";
import { ProfilePage } from "~/pages/profile";
import { RegisterPage } from "~/pages/register";
import { SignOutPage } from "~/pages/signout";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signout" element={<SignOutPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/:username" element={<AskPage />} />
    </Routes>
  );
};
