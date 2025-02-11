import { addButtonComment } from './buttonValue.js';
import { renderComments, addLikeButton } from './renderComments.js';
import { addCommentClick } from './quotingComment.js';
import { onDOMContentLoaded } from './document.js';

addButtonComment();

renderComments();

addLikeButton();

addCommentClick();

onDOMContentLoaded(renderComments);