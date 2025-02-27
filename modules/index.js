import { initAddCommentListener } from './addListeners.js';
import { fetchComments } from './api.js';
import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';

fetchComments().then (data => {
  updateComments(data);
  renderComments();
})

initAddCommentListener();