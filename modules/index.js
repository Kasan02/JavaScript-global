import { comments } from "./comments.js";
import { button } from "./variables.js";
import { ulEl } from "./variables.js";
import { nameStyle } from "./variables.js";
import { textStyle } from "./variables.js";
import { escapeHtml } from "./escapeHtml.js";




comments.comments;
button.variables;
ulEl.variables;
nameStyle.variables;
textStyle.variables;

const unsafeText = '<script>alert("XSS")</script>';
const safeText = escapeHtml(unsafeText);

console.log(safeText);









