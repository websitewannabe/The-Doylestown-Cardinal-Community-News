import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from './hooks/useAuth'; // Added import for AuthProvider

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider> {/* Added AuthProvider */}
      <App />
    </AuthProvider> {/* Added AuthProvider */}
  </StrictMode>,
);