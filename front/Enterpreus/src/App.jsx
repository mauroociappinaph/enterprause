import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import AuthLayout from "./layout/AuthLayout";
import Login from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ForgotPassworldPage from "./page/ForgotPassworldPage";
import ConfirmAccountPage from "./page/ConfirmAccountPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />} />
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPassworldPage />} />\
          <Route path="confirm-account" element={<ConfirmAccountPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
