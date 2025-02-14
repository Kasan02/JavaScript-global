import { addButtonListener } from './buttonValue.js';
import { renderComments, addLikeButton } from './renderComments.js';
import { addCommentClick } from './quotingComment.js';
import { onDOMContentLoaded } from './document.js';
import { addComment } from './renderComments.js';

addButtonListener();

onDOMContentLoaded(() => {
renderComments();
addCommentClick();
});