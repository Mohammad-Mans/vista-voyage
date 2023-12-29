import { Routes, Route } from "react-router-dom";
import { HomePage } from "./_root/pages";
import "./App.css";
import LoginPage from "./_auth/LoginForm/LoginForm";
import AuthLayout from "./_auth/AuthLayout";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route index element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
