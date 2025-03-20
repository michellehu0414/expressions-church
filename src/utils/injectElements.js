import { createRoot } from "react-dom/client";

export const injectElements = (components) => {
  Object.keys(components).forEach(id => {
    const container = document.getElementById(id);
    if (container) {
      createRoot(container).render(components[id]);
    }
  });
};