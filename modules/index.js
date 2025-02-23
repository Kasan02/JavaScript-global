import { initAddCommentListener } from './addListeners.js';
import { renderComments } from './renderComments.js';
import { updateComments } from './comments.js';

initAddCommentListener();

fetch("https://wedev-api.sky.pro/api/v1/daniil-kasanov/comments").then(responce => {
  return responce.json();
})
.then((data) => {
  updateComments(data.comments);
  renderComments();
})