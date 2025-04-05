import "./index.scss";
import "@scss/globals.scss";
import "@components/_global-components.scss";

import { injectTemplateSection } from "./sections/template";
import { } from "@components/Template";

document.addEventListener("DOMContentLoaded", () => {

    // Inject the Sunday Service section
    injectTemplateSection();
});