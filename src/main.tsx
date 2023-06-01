import React from "react";
import ReactDOM from "react-dom/client";
import JournalApp from "./JournalApp.tsx";


import { AppTheme } from "./theme/AppTheme.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
   <AppTheme>
      <JournalApp/>
    </AppTheme> 
  </React.StrictMode>
);
