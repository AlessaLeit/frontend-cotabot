import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import HomePage from "../pages/Home/HomePage";
// import NotificationsPage from "./pages/NotificationsPage";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route
              path="/notificacoes"
              element={<NotificationsPage />}
            /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}