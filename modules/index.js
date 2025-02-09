import { comments } from "./comments.js";
import { button, ulEl, nameStyle, textStyle } from './variables.js';
import { escapeHtml } from './escapeHtml.js';
import { addButtonListener } from './buttonValue.js'; 
import { renderComments } from './renderComments.js';
import { addLikeButtonListener } from './btnLike.js';  
import { onDOMContentLoaded } from './document.js';  

addButtonListener(button, nameStyle, textStyle, comments, renderComments);

renderComments();  

addLikeButtonListener(ulEl, comments);

onDOMContentLoaded(renderComments);

escapeHtml('<div>Это "небезопасный" текст &</div>');











