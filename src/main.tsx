import ReactDOM from "react-dom/client";

import App from "./App.jsx";

const entryPoint = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(entryPoint).render(<App />);
