import { addButtonListener } from './buttonValue.js';
import { renderComments, addLikeButton } from './renderComments.js';
import { addCommentClick } from './quotingComment.js';
import { onDOMContentLoaded } from './document.js';

addButtonListener();

onDOMContentLoaded(() => {
renderComments();
addLikeButton();
addCommentClick();
});