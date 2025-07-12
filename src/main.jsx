import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParallaxProvider>
    <MantineProvider>
      <App />
    </MantineProvider>

    </ParallaxProvider>
  </StrictMode>
);
