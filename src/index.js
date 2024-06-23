import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
