import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./App.css"
import { DemoProvider } from "./context/DemoContext"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DemoProvider>
      <App />
    </DemoProvider>
  </React.StrictMode>
)
