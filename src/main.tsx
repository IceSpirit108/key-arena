import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from "@/contexts/AuthContext"; // добавь импорт

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider> {/* оборачиваем App */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);